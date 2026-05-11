const questions = [{'category': 'culture',
                    'question': 'Who invented the airplane?',
                    'choices': ['Wright Brothers', 'Santos Dumont',
                        'Benjamin Franklin'
                    ],
                    'answer':'Wright Brothers'
                    }, 
                    {'category':'geography',
                        'question': 'Which is the longest river in the world?',
                        'choices': ['Mississipi river', 'Amazon river', 'Danube river'],
                        'answer': 'Amazon river'
                    }, 
                    {'category':'biology',
                        'question':'What is the powerhouse of the cell?',
                        'choices': ['Mitochondria', 'Hemoglobine', 'White cells'],
                        'answer': 'Mitochondria'
                    }, 
                    {'category':'nature',
                        'question':'Which is the largest mammal on Earth?',
                        'choices': ['Elephant', 'Butterfly', 'Sperm whale'],
                        'answer': 'Sperm whale'
                    }, 
                    {'category':'aviation',
                        'question': 'Which is the layer of the Earth where most flights are performed at?',
                        'choices': ['Stratosphere', 'Troposhere', 'Exosphere'],
                        'answer': 'Troposhere'
                    }
];



const getRandomQuestion = (array) => {
    let selector = Math.floor(Math.random() * 5);
    return array[selector];
}

const getRandomComputerChoice = (array) => {
    let selector = Math.floor(Math.random() * 3);
    return array[selector];
}

const getResults = (question, computerChoice) => {
    if(computerChoice === question.answer){
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
}