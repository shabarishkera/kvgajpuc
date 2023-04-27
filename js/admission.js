let form = document.querySelector('form');
	let email = document.getElementById('email');
  let frmdate = document.getElementById('frmdate-input');
  let indate = document.getElementById('inpdate-input');
  let name = document.getElementById('name');
  let fullname = document.getElementById('fullname');
  let source = document.getElementById('source');
  let phone = document.getElementById('phone');
  let dob = document.getElementById('date-input');  
  let classs = document.getElementById('class');
  let ethnicity = document.getElementById('ethnicity');
  let guardian = document.getElementById('guardian');
  let profession = document.getElementById('profession');
  let contact = document.getElementById('contactno');
  // let date = document.getElementById('date-input');
  // let date = document.getElementById('date-input');

  // let my_name = 'bivishan';

  form.addEventListener('submit',(e)=> {
 
    e.preventDefault();
    // function validate() {
      checkInputs();
    
    
  });


  function checkInputs() {
    let hasError = false; //created errorFlag 
    // let email = document.getElementById('exampleInputEmail1').value;
    if (email.value.trim() == '') {
      document.querySelector('.email-error').innerHTML = 'Email is Required';
      email.style.borderColor='red';
     hasError = true;
  // alert('email required');
}
    else {
      document.querySelector('#email').style.borderColor='green';
      document.querySelector('.email-error').innerHTML=" ";
    }

      if (frmdate.value == '') {
      frmdate.style.borderColor='red';
      document.querySelector('.fromdate-error').innerHTML = 'Fromdate is Required';

     hasError = true;
  // alert('email required');
}
    else {
       frmdate.style.borderColor='green';
      document.querySelector('.fromdate-error').innerHTML=" ";
    }

       if (indate.value == '') {
      indate.style.borderColor='red';
      document.querySelector('.todate-error').innerHTML = 'Inputdate is required';
     hasError = true;
  // alert('email required');
}
    else {
       indate.style.borderColor='green';
      document.querySelector('.todate-error').innerHTML=" ";
    }

     // let name = document.getElementById('frstName').value;
      var letters = /^[A-Za-z]+$/;
if (name.value.trim() == '' || !name.value.match(letters)) {
     name.style.borderColor='red';
      document.querySelector('.name-error').innerHTML = 'Invalid Name';
    hasError = true;
  // alert('email required');
}
  else {
     name.style.borderColor='green';
      document.getElementById('name-error').innerHTML='';
    }

 // let lstName = document.getElementById('lstName').value;
if (fullname.value.trim() == '') {
      fullname.style.borderColor='red';
      document.querySelector('.fullname-error').innerHTML = 'Fullname is Required';
     hasError = true;
  // alert('email required');
}
  else {
     fullname.style.borderColor='green';
      document.querySelector('.fullname-error').innerHTML='';
  }

// let pswd = document.getElementById('exampleInputPassword1').value;
if (source.value.trim() == '') {
      source.style.borderColor='red';
      document.querySelector('.source-error').innerHTML = 'Source is Required';
     hasError = true;
  // alert('email required');
}
  else {
     source.style.borderColor='green';
      document.querySelector('.source-error').innerHTML='';
  }

  if (phone.value == '') {
      phone.style.borderColor='red';
      document.querySelector('.phone-error').innerHTML = 'Phone number is Required';
     hasError = true;
  // alert('email required');
}
  else {
     phone.style.borderColor='green';
      document.querySelector('.phone-error').innerHTML='';
  }

  if (classs.value.trim() == '') {
      classs.style.borderColor='red';
      document.querySelector('.class-error').innerHTML = 'Class is Required';
     hasError = true;
  // alert('email required');
}
  else {
     classs.style.borderColor='green';
      document.querySelector('.class-error').innerHTML='';
  }

  let eaddress = document.getElementById('eaddress');
  if (eaddress.value.trim()== '') {
      eaddress.style.borderColor='red';
      document.querySelector('.eaddress-error').innerHTML = 'Address is Required';
     hasError = true;
  // alert('email required');
}
  else {
     eaddress.style.borderColor='green';
      document.querySelector('.eaddress-error').innerHTML='';
  }

    let gender = document.getElementById('gender');
    if (gender.value == '') {
      gender.style.borderColor='red';
      document.querySelector('.gender-error').innerHTML = 'Gender is Required';
     hasError = true;
  // alert('email required');
}
  else { 
     gender.style.borderColor='green';
      document.querySelector('.gender-error').innerHTML='';
  }

  if (dob.value == '') {
    dob.style.borderColor='red';
      document.querySelector('.dob-error').innerHTML = 'DOB is Required';
     hasError = true;
  // alert('email required');
}
  else {
    dob.style.borderColor='green';
      document.querySelector('.dob-error').innerHTML='';
  }

  if (ethnicity.value.trim() == '') {
    ethnicity.style.borderColor='red';
      document.querySelector('.ethncity-error').innerHTML = 'Ethnicity is Required';
     hasError = true;
  // alert('email required');
}
  else {
     ethnicity.style.borderColor='green';
      document.querySelector('.ethncity-error').innerHTML='';
  }

  if (guardian.value.trim() == '') {
    guardian.style.borderColor='red';
      document.querySelector('.guardian-error').innerHTML = 'Guardian is Required';
     hasError = true;
  // alert('email required');
}
  else {
     guardian.style.borderColor='green';
      document.querySelector('.guardian-error').innerHTML='';
  }

  let faddress = document.getElementById('faddress');
  if (faddress.value.trim() == '') {
    faddress.style.borderColor='red';
      document.querySelector('.faddress-error').innerHTML = 'Address is Required';
     hasError = true;
  // alert('email required');
}
  else {
     faddress.style.borderColor='green';
      document.querySelector('.faddress-error').innerHTML='';
  }

  if (profession.value.trim() == '') {
    profession.style.borderColor='red';
      document.querySelector('.profession-error').innerHTML = 'Profession is Required';
     hasError = true;
  // alert('email required');
}
  else {
     profession.style.borderColor='green';
      document.querySelector('.profession-error').innerHTML='';
  }

  if (contact.value == '') {
    contact.style.borderColor='red';
      document.querySelector('.contact-error').innerHTML = 'Contact number is Required';
     hasError = true;
  // alert('email required');
}
  else {
     contact.style.borderColor='green';
      document.querySelector('.contact-error').innerHTML='';
  }


if (hasError) {
  return false;
}
  }