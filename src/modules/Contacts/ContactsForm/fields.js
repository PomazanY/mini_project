const fields = {
    username: {
        type: "text",
        placeholder: "Username",
        name: "username",
        rules: {
            required: "Username must be exist"
        }
    },
    email: {
        type: "email",
        placeholder: "Email",
        name: "email",
        rules: {
            required: "Email must be exist"
        }
    },
    description: {
        as:"textarea",
        placeholder: "Enter text",
        name: "description",
        
    },
};

export default fields;