# ShiftReportFrontEnd
This repository contains the source code for the front end of Shift Report 

https://www.codejava.net/frameworks/spring-boot/spring-boot-thymeleaf-form-handling-tutorial



### Example for posting one to many relationship in thymeleaf

#### Html file

/*

<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
	<title>Create Customer</title>
</head>
<body>
	<h1>Create Customer</h1>
	<form th:object="${customer}" method="post">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" th:field="*{name}" required><br><br>
		<label for="order1">Order 1:</label>
		<input type="text" id="order1" name="orders[0].description" th:field="*{orders[0].description}" required><br>
		<label for="amount1">Amount:</label>
		<input type="number" id="amount1" name="orders[0].totalAmount" th:field="*{orders[0].totalAmount}" required><br><br>
		<label for="order2">Order 2:</label>
		<input type="text" id="order2" name="orders[1].description" th:field="*{orders[1].description}" required><br>
		<label for="amount2">Amount:</label>
		<input type="number" id="amount2" name="orders[1].totalAmount" th:field="*{orders[1].totalAmount}" required><br><br>
		<input type="submit" value="Submit">
	</form>
</body>
</html>


#### Customer Entity

@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orders = new ArrayList<>();

    // getters and setters

}

#### Order Entity

@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    private BigDecimal totalAmount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    // getters and setters

}

#### Controller Class

@GetMapping("/customers")
public String listCustomers(Model model) {
    List<Customer> customers = customerService.getAllCustomers();
    model.addAttribute("customers", customers);
    return "customer/list";
}

@PostMapping("/customers")
public String createCustomer(@ModelAttribute("customer") Customer customer) {
    customerService.createCustomer(customer);
    return "redirect:/customers";
}
  
#### Customer Service Class
  
@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with id " + id));
    }

    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public void deleteCustomer(Long id) {
        Customer customer = getCustomerById(id);
        customerRepository.delete(customer);
    }

    public void addOrderToCustomer(Long customerId, Order order) {
        Customer customer = getCustomerById(customerId);
        order.setCustomer(customer);
        customer.getOrders().add(order);
        saveCustomer(customer);
    }

}

	*/
  
 






















