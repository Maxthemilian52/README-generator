function generateREADME(data){
    return `# ${data.project} - Created by: ${data.name}

            ${data.license}

            ### Description

            Motivation - ${data.motivation}

            Why? - ${data.why}

            What did I learn? - ${data.learn}

            ${data.standOut}

            Contact Me!

            Email - ${data.email}

            Link to my Github Repository: ${data.github}
            
            Link to my LinkedIn: ${data.linkedin}
    `
}

module.exports = generateREADME;