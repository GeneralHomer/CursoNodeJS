import inquirer from 'inquirer';
import chalk from 'chalk';

import fs, { access } from 'fs';

operation();
function operation(){
    inquirer.prompt([{
        type:'list',
        name: 'action',
        message:"O que você deseja fazer?",
        choices:[
            'Criar conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ],
    }]).then((answer)=>{
        const action = answer['action'];
        if(action ==='Criar conta'){
            createAccount();
        }else if( action === 'Depositar'){
            deposit();
        }else if(action==='Consultar Saldo'){
            getAccountBallance();
        }else if(action === 'Sacar'){
            Sacar();
        }else if(action === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
            process.exit();
        }
    }).catch(err=>console.log(err))
}

function createAccount(){
    console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco'));
    console.log(chalk.green('Defina as opções da sua conta a seguir'));
buildAccount();
}

function buildAccount(){
    inquirer.prompt([
        {
            name:'accountName',
            message:'Digite um nome para a sua conta:',
        }
    ]).then((answer)=>{
        const accountName = answer['accountName'];
       console.info(accountName)
       if(!fs.existsSync('accounts')){
        fs.mkdirSync('accounts')
       }
       if(fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta já existe, escolha um outro nome'))
        buildAccount();
       }
       fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance":0}',(err)=>{console.log(err)} )
       console.log(chalk.green('Parabéns, sua conta foi criada com sucesso'))
       operation();
    }).catch((err)=>console.log(err))
}

function deposit(){
    inquirer.prompt([
        {
            name:'accountName',
            message:'Qual o nome da sua conta?',

        }
    ]).then((answer)=>{
        const accountName = answer['accountName'];
        if(!checkAccount(accountName)){
            return deposit();
        }
        inquirer.prompt([
            {
                name:'amount',
                message:'Quanto você deseja depositar?'
            }
        ]).then((answer)=>{
            const amount = answer['amount']
            addAmount(accountName,amount)
            operation();
            
        }).catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
}

function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
        return false;
    }
    return true;
}
function addAmount(accountName,amount){
    const accountData = getAccount(accountName);
    
    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, digite um valor válido'))
        return deposit();
    }
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);
    fs.writeFileSync(`accounts/${accountName}.json`,JSON.stringify(accountData),(err)=>{
        console.log(err);
    })
    console.log(chalk.bgYellow.green(`Foi depositado o valor de R$: ${amount} na sua conta!`));
    
}
function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`,{encoding:'utf-8', flag:'r'});
    return JSON.parse(accountJSON)

}
//show account balance
function getAccountBallance(){
inquirer.prompt([
    {
        name:'accountName',
        message: 'Qual o nome da sua conta?',
    }
]).then((answer)=>{
    const accountName = answer["accountName"];
    if(!checkAccount(accountName)){
        return getAccountBallance();
    }
    const accountData = getAccount(accountName);
    console.log(chalk.bgBlue.black(`Olá ${accountName}, o saldo da sua conta é de R$: ${accountData.balance}`))
    operation();

}).catch(err=>console.log(err))
}

function Sacar(){
    inquirer.prompt([
        {
            name:'accountName',
            message:'Qual o nome da sua conta?'
        }
    ]).then((answer)=>{
        const accountName = answer['accountName']
        if(!checkAccount(accountName)){
            return Sacar();
        }
        inquirer.prompt([
            {
                name:'amount',
                message:'Quanto você desejar sacar?'

            }
        ]).then((answer)=>{
            const amount  = answer['amount']
            console.log(amount);
            operation();
        }).catch(err=>console.log(err))

    }).catch(err=>console.log(err))
}