function calculateQuadratic(form: HTMLFormElement) {
    console.log("I was pressed")
    let output = document.getElementById("Output");
    event.preventDefault();

    let equation = form.equation.value;

    let equationSplit: Array<String> = equation.split("=");
    
    if (equationSplit.length === 2 || equationSplit.length === 1) {
        if (equationSplit[0] !== "0") {
            // If the left side of the '=' is not 0
            [equationSplit[0], equationSplit[1]] = [equationSplit[1],equationSplit[0]];
        };
        equation = equationSplit[1];
        
        output.innerHTML = handleEquation(equation)
    } else {
        output.innerText = "Invalid Equation"; 
        equation = equationSplit[0]
    };
}; 

interface QuadraticTypes {
    a: number;
    b: number;
    c: number;
};

function quadraticCalculator({a, b, c}:QuadraticTypes) {
    let sqrtpart = Math.sqrt(b**2 + (-4*a*c));
    let solution1 = (-b + sqrtpart) /(2*a);
    let solution2 = (-b - sqrtpart) /(2*a);
    if (solution1 == solution2) {
        return solution1;
    } else {
        return [solution1, solution2];
    }
};

module.exports = quadraticCalculator;

function handleExpandedForm(equation:string) {
    let equationParts = equation.split(/[-+]/g)
    let a: number, b: number, c: number
    // Getting a
    if (equationParts[0][0]  === "x") {
        a = 1
    } else {                
        a = Number(equationParts[0].replace(/[^0-9.]/g, ""))
    }

    // getting b
    if (equationParts[1][0]  === "x") {
        b = 1
    } else {                
        b = Number(equationParts[1].replace(/[^0-9.]/g, ""))
    }

    // getting c
    if (equationParts.length === 3) {
        c = Number(equationParts[2])
    } else {
        c = 1
    }
    console.log([a,b,c])
    return quadraticCalculator({a:a,b:b,c:c}).toString()
}

function handleExponentialFrom(equation:string) {
    let equationParts = equation.split(/[-+()]/g);
    if (equationParts[0][0] !== "2") {
        return handleExponentFirst(equationParts);
    } else {
        return handleExponentLast(equationParts);
    }
}

function handleExponentFirst(equationParts: Array<String>) {
    if (equationParts.length === 3) {
        return "0,0";
    } else {
        return `${0 - Number(equationParts[2])}`;
    }
}

function handleExponentLast(equationParts: Array<String>) {
    return "Invalid form, we don't handle that yet"
}

function handleEquation(equation: string) {
    console.log(equation);
    // No = sign
    let parenthCount = equation.match(/\([()]*\)/).length; 
    if (equation.includes("^")) {
        console.log("includes power");
        
        if (parenthCount === 1) {
            return handleExponentialFrom(equation);
        } else {
            return handleExpandedForm(equation);
        }
    } else  if (parenthCount === 2) {
        handleDoublePareth(equation);
    } else {
        return "You did something wrong lol"
    }
}

function handleDoublePareth(equationParts:string) {
    console.log(equationParts)
    
    
    return ""
}