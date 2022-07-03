#!/usr/bin/env mode

import chalk from 'chalk'
import inquirer from 'inquirer'
import gradient from 'gradient-string'
import chalkAnimation from 'chalk-animation'
import figlet from 'figlet'
import { createSpinner } from 'nanospinner'

//console.log(chalk.bgGreenBright('hello there'));

let playername
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

async function welcome() {
    const title = chalkAnimation.rainbow('Lets Start the GAME !!! \n');

    await sleep();
    title.stop();
    console.log(`${chalk.bgCyan('HOW TO PLAY')}
                'I am a process in this computer'
                'If u get any wrong answer i will be ${chalk.bgRed('killed!')}

    
    `)
}

async function handleanswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `Nice job ${playername}. That's the right answer!` });
    } else {
        spinner.error({ text: `💀💀💀 Game over, you lose ${playername}!` });
        process.exit(1);
    }

}

async function askname() {
    const answer = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is ur name?',
        default() { return 'Player' },
    });
    playername = answer.player_name;
}

function winner(){
    console.clear();
    figlet(`Congrats, ${playername}!\n`, (err,data)=>{
        console.log(gradient.pastel.multiline(data)+'\n');
        console.log(
            chalk.green(`Computer Science rocks!!!`)
        );
        process.exit(0);
    });

}

async function question1() {
    const answer = await inquirer.prompt({
        name: 'question1',
        type: 'list',
        message: 'Which of the following is application of PaaS cloud service?\n',
        choices: [
            'Heroku',
            'AWS Elastic Beanstalk',
            'Windows Azure',
            'All of the above',
        ],
    });
    return handleanswer(answer.question1=='All of the above')
}

async function question2() {
    const answer = await inquirer.prompt({
        name: 'question2',
        type: 'list',
        message: 'Can a tree stored in an array using either one of inorder or post order or pre order traversals be again reformed?\n',
        choices: [
            'Yes just traverse through the array and form the tree',
            'No we need one more traversal to form a tree',
            'No in case of sparse trees',
            'Yes by using both inorder and array elements',
        ],
    });
    return handleanswer(answer.question2=='No we need one more traversal to form a tree')
}
async function question3() {
    const answer = await inquirer.prompt({
        name: 'question3',
        type: 'list',
        message: 'When a process is in a “Blocked” state waiting for some I/O service. When the service is completed, it goes to the __________\n',
        choices: [
            'Terminated state',
            'Suspended state',
            'Ready state',
            'Running state',
        ],
    });
    return handleanswer(answer.question3=='Ready state')
}
async function question4() {
    const answer = await inquirer.prompt({
        name: 'question4',
        type: 'list',
        message: 'Which of these is not applicable for IP protocol?\n',
        choices: [
            'Connectionless',
            'Offer reliable service',
            'Offer unreliable service',
            'Does not offer error reporting',
        ],
    });
    return handleanswer(answer.question4=='Offer reliable service')
}

console.clear()
await welcome()
await askname()
await question1()
await question2()
await question3()
await question4()
winner()