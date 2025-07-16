#include<stdio.h>
#include<stdlib.h>
#include"calculate.h"

int main(){
    int result;
    Input calculator;
    printf("\nEnter numbers: ");
    scanf("%d",&calculator.operand[0]);
    scanf("%d",&calculator.operand[1]);

    printf("\nEnter the operand: ");
    scanf(" %c",&calculator.operation);

    printf("\n");

    result=calculate(&calculator);

    printf("Calcualtion Result is:%d \n", result);
    return 0;
}
