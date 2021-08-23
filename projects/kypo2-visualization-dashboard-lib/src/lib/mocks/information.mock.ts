export const GAME_INFORMATION = {
    id: 8,
    title: 'Example CTF Game created by CSIRT-MU',
    description: 'https://kypo.cz https://csirt.muni.cz',
    prerequisities: [
        'Here should be the list of required skills or prerequisities.'
    ],
    outcomes: [
        'Here should be listed the outcomes of playing this game'
    ],
    sandbox_definition_ref_id: 7,
    levels: [
        {
            id: 16,
            title: 'Introduction',
            max_score: 0,
            level_type: 'INFO_LEVEL',
            estimated_duration: 3,
            training_definition: {
                id: 8,
                title: 'Example CTF Game created by CSIRT-MU.',
                description: 'https://kypo.cz https://csirt.muni.cz'
            },
            order: 0,
            content: '<h1>Introduction</h1> Having a skeleton in a closet is not a good thing, especially not for a presidential candidate. It would be very helpful if the evidence could ‘disappear‘. And for you, it could be profitable. <b>Very profitable</b>. But you‘ve been on this case for several days now and you haven‘t been able to find any vulnerability yet. The elections are getting closer and the time is running out. You‘ve nearly given up, but last night a miracle happened. In a local bar you‘ve met <b>Bob</b>. After a few drinks, your discussion came across his work. And lo and behold, he is a system administrator in <b>ASC</b>, security company managing police records. Exactly what you need. Awesome, right? Anyway, he mentioned that he‘s not looking forward to fixing the <b>vulnerable SSH server</b> and <b>the display server</b>. That might be exactly what you were looking for! Now it should be quick and easy! And very, very profitable!<br> <b>Are you ready to start?</b> <h1>Rules</h1> <p> <b>WARNING: You should never use these techniques and skills to gain unauthorized access. It‘s illegal and you‘ll bear consequences. This game is only for educational purposes. To show you that ‘while there‘s code there‘s a bug‘ and also how can you defend yourself.</b> </p><p> This game consists of <b>four game levels</b>. In each level, you will have to complete some specified task. To prove that you completed the task and can go to the next level you will have to <b>submit a flag</b>. Every level has a description of what to do and how to get the flag. </p> <p> <b>General note: <span style=‘color: #008000‘>All programs you will need to complete the tasks are installed.</span></b> </p> <b>DON‘T CHEAT!</b> <h2>Help System</h2> <p> If you‘re unable to complete a level, you can either use <b>hints</b> which will give a piece of advice, but you‘ll <b>lose some points</b>. The description of the hints is on the button caption. After using all the hints, if you still don‘t know how to complete the task, view the <b>Solution</b>.</p>'
        },
        {
            id: 17,
            title: 'Find the Vulnerable SSH Server',
            max_score: 5,
            level_type: 'GAME_LEVEL',
            estimated_duration: 10,
            training_definition: {
                id: 8,
                title: 'Example CTF Game created by CSIRT-MU',
                description: 'https://kypo.cz https://csirt.muni.cz'
            },
            order: 1,
            flag: 'CVE-2020-12345',
            content: '<p> Well, somewhere out there is a vulnerable SSH server. But on what port is it running? You should <b>scan the server</b> and find out the port, as well as the type of vulnerability. <b>Identifying the vulnerability is the key</b>. Vulnerabilities have a common identifier that looks something like this “CVE-YYYY-abcde”. But sometimes the scanner can’t identify the vulnerability by itself, you might have to google a bit to find it out. Ok, so <b>CALM DOWN...</b>, <b>TURN ON YOUR BRAIN</b> and <b>start scanning!</b> The Flag for this level is the CVE of the vulnerability (the whole string). </p>',
            solution: 'Here should be the solution for given level',
            solution_penalized: true,
            hints: [
                {
                    id: 21,
                    title: 'Which tool to use for scanning and the arguments for it',
                    content: 'Content of the hint should be here.',
                    hint_penalty: 2,
                    order: 0
                },
                {
                    id: 20,
                    title: 'How to find out CVE from the software name and version',
                    content: 'Content of the hint should be here.',
                    hint_penalty: 1,
                    order: 0
                },
                {
                    id: 19,
                    title: 'Name of the SSH library',
                    content: 'Content of the hint should be here.',
                    hint_penalty: 1,
                    order: 0
                }
            ],
            incorrect_flag_limit: 100
        },
        {
            id: 18,
            title: 'Get ACCESS!',
            max_score: 10,
            level_type: 'GAME_LEVEL',
            estimated_duration: 5,
            training_definition: {
                id: 8,
                title: 'Example CTF Game created by CSIRT-MU',
                description: 'https://kypo.cz https://csirt.muni.cz'
            },
            order: 2,
            flag: 'AnAccess',
            content: '<p> Good job! Now you know how to get in! LibSSH can be very <b>trustful</b>. You might be tempted to use one of the exploits that fit in a tweet. They are undoubtedly cool, but it‘s usually a good idea to stick with tried & tested software, like Metasploit for example. If you‘re not familiar with it, try googling a bit. There are tutorials everywhere. </p> <p> <b><i>Due to technical limitation the flag can only be found by attacking from Metasploit.</i></b> You will recognize it when you see it.</p>',
            solution: 'Here should be the solution for given level',
            solution_penalized: true,
            hints: [
                {
                    id: 23,
                    title: 'How to set module options',
                    content: 'Content of the hint should be here.',
                    hint_penalty: 3,
                    order: 0
                },
                {
                    id: 24,
                    title: 'How to find the right module',
                    content: 'Content of the hint should be here.',
                    hint_penalty: 3,
                    order: 1
                },
                {
                    id: 22,
                    title: 'How to start Metasploit',
                    content: 'Content of the hint should be here.',
                    hint_penalty: 2,
                    order: 2
                }
            ],
            incorrect_flag_limit: 100
        },
        {
            id: 19,
            title: 'Escalate privileges',
            max_score: 10,
            level_type: 'GAME_LEVEL',
            estimated_duration: 50,
            training_definition: {
                id: 8,
                title: 'Example CTF Game created by CSIRT-MU',
                description: 'This is the introductory game for PV276 class. Made by CSIRT-MU. https://csirt.muni.cz'
            },
            order: 3,
            flag: 'Directory',
            content: '<p> Congrats, you are in. But it’s only the beginning. (To not waste your time, we have a gift for you: <b>username: <span style=‘color: #008000‘>alice</span></b>, <b>password: <span style=‘color: #008000‘>starwars</span></b>). You might try using the session from the last level, but that will only get you into trouble. So we strongly encourage you to connect to regular SSH on port 22 using the credential provided above. Now you can only see and do what a regular user could, but <b>you need more</b>. You need to access private files of other users, so you will have to <b>escalate your privileges</b>. The usual stuff might not work, the server is fairly well patched. Fairly well, but not perfectly. Last patches were applied mid-October 2018. So you‘re probably looking for some recent privilege escalation vulnerability. Maybe you already know where. You‘ve talked with the guy in the bar for nearly three hours and he mentioned some broken display server. **! WARNING !** You are messing with user accounts and privileges during the execution of privilege escalation attack. If you accidentally delete all accounts or destroy the server in any other way, the game might be over for you! This can be somehow salvaged if you keep your SSH running and fix the server again by repeating the attack correctly. But never close your active connection, you might not be able to get it again. </p> <p> The flag is in one of the private files. You will know once you see it.</p>',
            solution: 'Here should be the solution for given level',
            solution_penalized: true,
            hints: [
                {
                    id: 25,
                    title: 'Hints for exploit',
                    content: 'Content of the hint should be here.',
                    hint_penalty: 3,
                    order: 0
                },
                {
                    id: 26,
                    title: 'Some line in the correct format',
                    content: 'Content of the hint should be here.',
                    hint_penalty: 3,
                    order: 1
                },
                {
                    id: 27,
                    title: 'Name of the vulnerable program (if you don‘t know where to start, this is cheap hint)',
                    content: 'Content of the hint should be here.',
                    hint_penalty: 1,
                    order: 2
                }
            ],
            incorrect_flag_limit: 100
        },
        {
            id: 20,
            title: 'Cover your tracks',
            max_score: 5,
            level_type: 'GAME_LEVEL',
            estimated_duration: 5,
            training_definition: {
                id: 8,
                title: 'Example CTF Game created by CSIRT-MU',
                description: 'https://kypo.cz https://csirt.muni.cz'
            },
            order: 4,
            flag: 'catchTheFish',
            content: '<p> Great! The file with the evidence should be named <b>file.doc</b>. It can be found somewhere on this server, who knows where. So find it and delete it from the server.</span> <b>But do you know what else you have done?</b> You broke the server. Now no one can sign in. That’s suspicious. And someone will soon notice that something had happened with the server. Maybe you can fix it by finding shadow’s backup and copy it back. A huge bundle is waiting for you, please <b>DON‘T BUGGER IT UP!!!</b> The final <b>flag</b> is in <b>the original /etc/shadow</b>. You‘ll recognize it when you see it.</p> <p> <i>And one more thing. In your efforts to escalate privileges you might have overwrote even the backup. If you find that‘s the case and you don‘t know how to continue, feel free to contact the organizers.</i> </p>',
            solution: 'Here should be the solution for given level',
            solution_penalized: true,
            hints: [
                {
                    id: 28,
                    title: 'Name of shadow backup',
                    content: 'Content of the hint should be here.',
                    hint_penalty: 2,
                    order: 0
                },
                {
                    id: 29,
                    title: 'Where is the file?',
                    content: 'Content of the hint should be here.',
                    hint_penalty: 2,
                    order: 1
                }
            ],
            incorrect_flag_limit: 100
        },
        {
            id: 21,
            title: 'Conclusion',
            max_score: 0,
            level_type: 'INFO_LEVEL',
            estimated_duration: 2,
            training_definition: {
                id: 8,
                title: 'Example CTF Game created by CSIRT-MU',
                description: 'https://kypo.cz https://csirt.muni.cz'
            },
            order: 5,
            content: '<p> Everything played out just fine. No one could discredit the candidate in time. And after he became the president, it didn‘t matter. <b>And that all because of you!</b> And your big payout? It never came. Why should it, when you‘ve already done the job and there isn‘t anything that could endanger him. Maybe you should have copied the files, instead of just deleting them. That‘s the trouble with people in politics. They always talk, but rarely follow through. But don‘t blame your mistakes on me, I‘ve asked you if you know what you‘ve done.<p>'
        },
        {
            id: 22,
            title: 'Feedback',
            max_score: 0,
            level_type: 'ASSESSMENT_LEVEL',
            estimated_duration: 5,
            training_definition: {
                id: 8,
                title: 'Example CTF Game created by CSIRT-MU',
                description: 'https://kypo.cz https://csirt.muni.cz'
            },
            order: 6,
            questions: '',
            instructions: 'Give us your feedback, please.',
            assessment_type: 'QUESTIONNAIRE'
        }
    ],
    show_stepper_bar: true,
    can_be_archived: false,
    estimated_duration: 80
}
