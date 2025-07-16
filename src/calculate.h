#ifndef CALCULATE_H
#define CALCULATE_H
// input structure handler

typedef struct {
    char operation;
    int operand[2];
}Input;


// function decleration

int calculate(Input * p);
int add(int a,int b);
int substract(int a,int b);
int multiply(int a,int b);
int dvision(int a,int b);

#endif
