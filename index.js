import {input, confirm, checkbox} from '@inquirer/prompts';

async function runPrompts(){
    const name = await input({message:'Quel est votre nom:'});
    console.log(`Bonjour ${name}!`);

    const isMajor = await confirm(
        {
            message:'Etes-vous majeur?',
            default: false,
        }
    );

    let hasPermit = false;
    if(isMajor){
        hasPermit = await confirm({
            message:'Avez-vous votre permis?',
            default: false,
        });
    }
     const check = await checkbox({
        message:'quel est votre couleur preferée?',
        choices:[
            {name:'Bleu',value:'Bleu'},
            {name:'Rouge',value:'Rouge'},
            {name:'Vert', value:'Vert'},
            {name:'Orange', value:'Orange'}
        ]
     });
        
     
    console.log('Bonjour '+name+'.'+(hasPermit ? 'Vous avez votre permis!' : '')+'\n'+'Votre couleur prefer est:'+check+'.');

}

runPrompts();
