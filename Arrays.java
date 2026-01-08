Finding Average Temperature:
Code:
import java.util.*;
public class Main{
public static void main(String[] args){
Scanner sc = new Scanner(System.in);
System.out.print(�How many days temperature�s? �);
int n = sc.nextInt();
int sum = 0;
for(int i=1;i<=n;i++){
System.out.print(�Day �+i+��s temp? �);
int next = sc.nextInt();
sum += next
}
double Average = (double) sum/n;
System.out.println(�Average: �+average);
}
}



