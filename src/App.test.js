//Jest unit testings

//testing contact form validation
describe('validate function', () => {

  //test 1
  it('returns error message when fullname is empty', () => {
    const values = {fullname: '', email: 'validemail@example.com', comment: 'testing is fun!'};
    const errors = {}
    const regName= /^[a-zA-Z]+ [a-zA-Z]+$/
    const regEmail= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
        errors.fullname = "Name is required!"
    } 
    else if (!regName.test(values.fullname)) {
        errors.fullname = "Please enter your full name!"
    }
    expect(errors.fullname).toBe('Name is required!');
  });

 //test 2
  it('returns error message when fullname is not in correct format', () => {
    const values = {fullname: 'HSamoen', email: 'validemail@example.com', comment: 'testing is fun!'};
    const errors = {}
    const regName= /^[a-zA-Z]+ [a-zA-Z]+$/
    const regEmail= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
        errors.fullname = "Name is required!"
    } 
    else if (!regName.test(values.fullname)) {
        errors.fullname = "Please enter your full name!"
    }
    expect(errors.fullname).toBe('Please enter your full name!');
  });

  //test 3
  it('returns error message when email is empty', () => {
    const values = {fullname: 'HSamoen Eban', email: '', comment: 'testing is fun!'};
    const errors = {}
    const regName= /^[a-zA-Z]+ [a-zA-Z]+$/
    const regEmail= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
        errors.fullname = "Name is required!"
    } 
    else if (!regName.test(values.fullname)) {
        errors.fullname = "Please enter your full name!"
    }

    if (!values.email) {
        errors.email = "Email is required!"
    } else if (!regEmail.test(values.email)) {
        errors.email = "Please enter a valid email!"
    }
    expect(errors.email).toBe('Email is required!');
  });
   
  //test 4
  it('returns error message when email is not in correct format', () => {
    const values = {fullname: 'HSamoen Eban', email: 'invalidemail', comment: 'testing is fun!'};
    const errors = {}
    const regName= /^[a-zA-Z]+ [a-zA-Z]+$/
    const regEmail= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
        errors.fullname = "Name is required!"
    } 
    else if (!regName.test(values.fullname)) {
        errors.fullname = "Please enter your full name!"
    }

    if (!values.email) {
        errors.email = "Email is required!"
    } else if (!regEmail.test(values.email)) {
        errors.email = "Please enter a valid email!"
    }
    expect(errors.email).toBe('Please enter a valid email!');
  });
})