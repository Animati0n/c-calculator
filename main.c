#include<stdio.h>
#include<stdlib.h>

// input structure handler

typedef struct {
    char operator;
    int operand[2];
} input;


// function decleration

int calculate(input * p);
int add(int a,int b);
int substract(int a,int b);
int multiply(int a,int b);
int dvision(int a,int b);

int main(){
    int result;
    input calculator;
    printf("\nEnter numbers: ");
    scanf("%d",&calculator.operand[0]);
    scanf("%d",&calculator.operand[1]);

    printf("\nEnter the operand: ");
    scanf(" %c",&calculator.operator);

    printf("\n");

    result=calculate(&calculator);

    printf("Calcualtion Result is:%d \n", result);
    return 0;
}

int calculate(input *calculate){
    switch(calculate->operator){
        case '+':
            return add(calculate->operand[0], calculate->operand[1]);
        case '-':
            return substract(calculate->operand[0], calculate->operand[1]);
        case '*':
            return multiply(calculate->operand[0], calculate->operand[1]);
        case 'x':
            return multiply(calculate->operand[0], calculate->operand[1]);
        case '/':
            return dvision(calculate->operand[0], calculate->operand[1]);
        default:  
            printf("Operation not found!!!!\n");
            exit(1);
    }
}


int add(int a,int b){
    return a+b;
}
int substract(int a,int b){
    return a-b;
}
int multiply(int a,int b){
    return a*b;
}

int dvision(int a,int b){
    return a/b;
}

