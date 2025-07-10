// task_1/js/main.ts

interface Teacher {
	  readonly firstName: string;
	    readonly lastName: string;
	      fullTimeEmployee: boolean;
	        yearsOfExperience?: number;
		  location: string;
		    [key: string]: any; // Allows adding any additional attribute
}

interface Directors extends Teacher {
	  numberOfReports: number;
}

const teacher3: Teacher = {
	  firstName: 'John',
	    fullTimeEmployee: false,
	      lastName: 'Doe',
	        location: 'London',
		  contract: false,
};

const director1: Directors = {
	  firstName: 'John',
	    lastName: 'Doe',
	      location: 'London',
	        fullTimeEmployee: true,
		  numberOfReports: 17,
};

// Interface for the printTeacher function
interface printTeacherFunction {
	  (firstName: string, lastName: string): string;
}

// Implementation of the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
	  return `${firstName.charAt(0)}. ${lastName}`;
};
// Interface for the constructor
interface StudentConstructor {
	  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class instance
interface StudentClassInterface {
	  firstName: string;
	    lastName: string;
	      workOnHomework(): string;
	        displayName(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
	  firstName: string;
	    lastName: string;

	      constructor(firstName: string, lastName: string) {
		          this.firstName = firstName;
			      this.lastName = lastName;
			        }

				  workOnHomework(): string {
					      return 'Currently working';
					        }

						  displayName(): string {
							      return this.firstName;
							        }
}

// Task 4
const student = new StudentClass('John', 'Doe');
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working

// Task 3
console.log(printTeacher("John", "Doe"));  // Output: J. Doe

// Task 2:
console.log(teacher3);
console.log(director1);

/*********************** TASK 5 SOLUTION ***********************/
// Director and Teacher interfaces and implementation

// Director Interface
interface DirectorInterface {
	  workFromHome(): string;
	    getCoffeeBreak(): string;
	      workDirectorTasks(): string;
}

// Teacher Interface
interface TeacherInterface {
	  workFromHome(): string;
	    getCoffeeBreak(): string;
	      workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
	  workFromHome(): string {
		      return 'Working from home';
		        }
			  
			  getCoffeeBreak(): string {
				      return 'Getting a coffee break';
				        }
					  
					  workDirectorTasks(): string {
						      return 'Getting to director tasks';
						        }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
	  workFromHome(): string {
		      return 'Cannot work from home';
		        }
			  
			  getCoffeeBreak(): string {
				      return 'Cannot have a break';
				        }
					  
					  workTeacherTasks(): string {
						      return 'Getting to work';
						        }
}

// Function to create employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
	  if (typeof salary === 'number' && salary < 500) {
		      return new Teacher();
		        }
			  return new Director();
}

// Example usage
console.log(createEmployee(200));    // Output: Teacher
console.log(createEmployee(1000));   // Output: Director
console.log(createEmployee('$500')); // Output: Director
/*********************** END TASK 5 ***********************/


/*********************** TASK 6 SOLUTION ***********************/
// Employee type checking and work execution functions

// Type predicate to check if employee is Director
function isDirector(employee: Director | Teacher): employee is Director {
	  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute appropriate work based on employee type
function executeWork(employee: Director | Teacher): string {
	  if (isDirector(employee)) {
		      return employee.workDirectorTasks();
		        } else {
				    return employee.workTeacherTasks();
				      }
}

// Example usage demonstrating both cases
console.log(executeWork(createEmployee(200)));   // Output: "Getting to work"
console.log(executeWork(createEmployee(1000)));  // Output: "Getting to director tasks"
/*********************** END TASK 6 ***********************/
