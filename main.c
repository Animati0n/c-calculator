#include<stdio.h>

int main(int argcount,char *argvalues[]){
	/*
	 * This is calcualter reitration want to add 
	 *   time calculator (time conversion,time calculation)
	 *   basic calculation fetures 
	 *   trignometric calculation
	 *   finance calculation 
	 *   avreage calculation
	 *
	 * basic synatx:
	 *     calcualtor 10+22+10+22
	 *     calculator [option] [oprand and operator]
	 *     calculator [option as oprator] oprands 
	 *
	  */

	printf("argument count: %d\n",argcount); 
	printf("\n argument values:\n************************\n"); 
	for (int i=0;i<argcount;i++){
		printf("[%d] = %s\n",i, argvalues[i]);
	}
}
