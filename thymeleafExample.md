## Two level relationship Person-OneToOne-Address-OneToMany-PhoneNumber

### Thymeleaf
      <form th:object="${person}" method="post">

          <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" class="form-control" id="name" th:field="*{name}">
          </div>

          <div class="form-group">
              <label for="street">Street:</label>
              <input type="text" class="form-control" id="street" th:field="*{address.street}">
          </div>

          <div class="form-group">
              <label for="city">City:</label>
              <input type="text" class="form-control" id="city" th:field="*{address.city}">
          </div>

          <div class="form-group">
              <label for="state">State:</label>
              <input type="text" class="form-control" id="state" th:field="*{address.state}">
          </div>

          <div class="form-group">
              <label for="zipCode">Zip Code:</label>
              <input type="text" class="form-control" id="zipCode" th:field="*{address.zipCode}">
          </div>

          <div class="form-group">
              <label for="phoneNumber1">Phone Number 1:</label>
              <input type="text" class="form-control" id="phoneNumber1" th:field="*{address.phoneNumbers[0].number}">
          </div>

          <div class="form-group">
              <label for="phoneNumber2">Phone Number 2:</label>
              <input type="text" class="form-control" id="phoneNumber2" th:field="*{address.phoneNumbers[1].number}">
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>

      </form>
      
 ### Person Entity
 
   @Entity
  public class Person {

      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Long id;

      private String name;

      @OneToOne(mappedBy = "person", cascade = CascadeType.ALL, orphanRemoval = true)
      private Address address;

      // getters and setters

  }
  
### Address Entity

    @Entity
    public class Address {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String street;

        private String city;

        private String state;

        private String zipCode;

        @OneToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "person_id")
        private Person person;

        @OneToMany(mappedBy = "address", cascade = CascadeType.ALL, orphanRemoval = true)
        private List<PhoneNumber> phoneNumbers = new ArrayList<>();

        // getters and setters

    }

### Phone Number Entity

    @Entity
    public class PhoneNumber {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String number;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "address_id")
        private Address address;

        // getters and setters

    }
    
### Controller Class

    @PostMapping("/persons")
    public String createPerson(@ModelAttribute("person") Person person) {
        personService.savePerson(person);
        return "redirect:/persons";
    }

    @GetMapping("/persons/add")
    public String showPersonForm(Model model) {
        Person person = new Person();
        Address address = new Address();
        address.setPhoneNumbers(Arrays.asList(new PhoneNumber(), new PhoneNumber()));
        person.setAddress(address);
        model.addAttribute("person", person);
        return "person-form";
    }
    
### PersonRepository Class
    public interface PersonRepository extends JpaRepository<Person, Long> {
    }
    
### PersonService

    public interface PersonService {
        List<Person> getAllPersons();
        void savePerson(Person person);
    }
### PersonServiceImpl

    @Service
    public class PersonServiceImpl implements PersonService {

        private final PersonRepository personRepository;

        @Autowired
        public PersonServiceImpl(PersonRepository personRepository) {
            this.personRepository = personRepository;
        }

        @Override
        public List<Person> getAllPersons() {
            return personRepository.findAll();
        }

        @Override
        public void savePerson(Person person) {
            personRepository.save(person);
        }
    }







