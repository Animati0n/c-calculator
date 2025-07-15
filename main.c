#include<stdio.h>
#include<stdlib.h>

int calculate(int operand[2],char operator);
int add(int a,int b);
int substract(int a,int b);
int multiply(int a,int b);
int dvision(int a,int b);

int main(){
    int operand[2],result;
    char operator; 
    printf("\nEnter numbers: ");
    scanf("%d",&operand[0]);
    scanf("%d",&operand[1]);

    printf("\nEnter the operand: ");
    scanf(" %c",&operator);

    printf("\n");

    result=calculate(operand,operator);

    printf("Calcualtion Result is:%d \n", result);
    return 0;
}

int calculate(int opreand[2],char operator){
    switch(operator){
        case '+':
            return add(opreand[0],opreand[1]);
        case '-':
            return substract(opreand[0],opreand[1]);
        case '*':
            return multiply(opreand[0],opreand[1]);
        case 'x':
            return multiply(opreand[0],opreand[1]);
        case '/':
            return dvision(opreand[0],opreand[1]);
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

