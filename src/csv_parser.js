

function test_func(){
  return "hello";
}

async function CSVParser() {

  const response = await fetch("./data_cases.csv");
  const data = await response.text();

  //console.log(response, data);

  const rows = data.split('\n').slice(1);
  rows.forEach(element => {
    const row = element.split(',');
    const childid = row[0];
    const childfirstname = row[1];
    const childlastname = row[2];
    const birthdate = row[3];
    const sex = row[4];
    const race = row[5];
    const haircolor = row[6];
    const eyecolor = row[7];
    const height = row[8];
    const weight = row[9];
    const missingreporteddate = row[10];
    const missingfromdate = row[11];
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
    
  });
  return rows;
}

module.exports= {
  test_func,
  CSVParser
};
//module.exports.CSVParser=CSVParser();