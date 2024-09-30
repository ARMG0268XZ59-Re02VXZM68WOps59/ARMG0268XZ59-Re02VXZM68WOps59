document.addEventListener("DOMContentLoaded", () => {
    const terminalBody = document.querySelector(".terminal-body");

    const commands = {
        help: "Available commands: help, about, social, clear",
        about: "Hello, I'm Alex [ Codename: ARMG0268XZ59 ]. Passionate about researching the Universe, Technology, and Supernatural phenomena.",
        social: "Follow me on GitHub: https://github.com/ARMG0268XZ59 and Twitter: https://twitter.com/ARMG0268XZ59",
        clear: "",
    };

    const commandLine = document.createElement("div");
    commandLine.classList.add("terminal-input");
    commandLine.innerHTML = `<label>$ </label><input type="text" autofocus placeholder="Enter command here..." />`;
    terminalBody.appendChild(commandLine);
    const inputField = commandLine.querySelector("input");

    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const inputValue = inputField.value.trim();
            const output = document.createElement("div");
            output.classList.add("output");

            if (commands.hasOwnProperty(inputValue)) {
                output.textContent = commands[inputValue];
            } else if (inputValue === "clear") {
                terminalBody.innerHTML = "";
            } else {
                output.textContent = `'${inputValue}' is not a recognized command. Type 'help' for available commands.`;
            }

            if (inputValue !== "clear") {
                terminalBody.appendChild(output);
                commandLine.remove();
                const newCommandLine = document.createElement("div");
                newCommandLine.classList.add("terminal-input");
                newCommandLine.innerHTML = `<label>$ </label><input type="text" autofocus placeholder="Enter command here..." />`;
                terminalBody.appendChild(newCommandLine);
                newCommandLine.querySelector("input").focus();
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
        }
    });
});
