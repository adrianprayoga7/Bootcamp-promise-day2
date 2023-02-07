const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const validator = require('validator');
  const fs = require('fs');

            if (!fs.existsSync('data')) {
                fs.mkdirSync('data');
              }
            
            if (!fs.existsSync('data/contacts.json')) {
                fs.writeFileSync ('data/contacts.json', '[]','utf-8');
              }

              const question = (question) => {
                  return new Promise((resolve, reject) => {
                    readLine.question(question, (answer) => {
                      resolve(answer)
                    })
                  })
                }
                
                

                const main = async () => {
                      const nama = await question('Masukan nama: ');
                      const tlp = await question('Masukan no telepon: ');
                      const email = await question('Masukan email :');
                      if (!validator.isMobilePhone(`${tlp}`,'id-ID')) {
                        console.log('nomor tidak valid');
                    } else if(!validator.isEmail(`${email}`)) {
                        console.log('email tidak valid');
                    } else {
                      console.log("hasil: ", {
                          "nama " : nama,
                          "tlp" : tlp,
                          "email" : email
                      });
                    }
                      const contacts = JSON.parse(fs.readFileSync('data/contacts.json', 'utf-8'));
                      const kontak = {
                          nama,
                          tlp,
                          email
                      };
                      contacts.push(kontak);
                      const json = JSON.stringify(contacts);
                      fs.writeFileSync('data/contacts.json',json);
                      readLine.close;
                    }

                main();
           
            
        