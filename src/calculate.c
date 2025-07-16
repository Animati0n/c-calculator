#include<stdio.h>
#include<stdlib.h>
#include"calculate.h"

int calculate(Input *calculate){
    switch(calculate->operation){
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

