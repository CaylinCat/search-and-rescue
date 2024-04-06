function calculateAge(birthdayString) {
  const birthday = new Date(birthdayString);
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const hasBirthdayPassed = today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());
  if (!hasBirthdayPassed) {
      age--;
  }
  return age;
}

function test_func(){
  return "hello";
}

async function CSVParser() {

  const response = await fetch("./data_cases.csv");
  const data = await response.text();
  const parsedData = [];

  //console.log(response, data);

  const rows = data.split('\n').slice(1);
  rows.forEach(element => {
    const row = element.split(',');
    const childid = row[0];
    const name = row[1] + " " + row[2];
    const age = calculateAge(row[3]);
    const sex = row[4];
    const race = row[5];
    const haircolor = row[6];
    const eyecolor = row[7];
    const height = row[8];
    const weight = row[9];
    const missingreporteddate = row[10];
    const date = row[11];
    const missingfromcity = row[12];
    const missingfromstate = row[13];
    const missingfromcountry = row[14];
    const ncmeccasenumber = row[15];
    const casetype = row[16];
    const postercontact = row[17];
    const posterurl = row[18];
    /*console.log(childid,childfirstname,childlastname,birthdate,sex,race,haircolor,eyecolor,height,weight,
      missingreporteddate,missingfromdate,missingfromcity,missingfromstate,missingfromcountry,ncmeccasenumber,
      casetype,postercontact,posterurl);
    */

    parsedData.push({ name, age, date });
    
  });
  return parsedData;
}


module.exports= {
  test_func,
  CSVParser
};
//module.exports.CSVParser=CSVParser();