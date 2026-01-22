public class InsertionArrays{
    int arr[] = null;
    public InsertionArrays(int n){
        arr = new int[n];
        for(int i=0;i<arr.length;i++){
            arr[i] = Integer.MIN_VALUE;
        }
    }
    public void insert(int location, int ValueToBeInserted){
        try {
            if(arr[location] == Integer.MIN_VALUE){
                arr[location] = ValueToBeInserted;
                System.out.println("Inserted Successfully");
                }else{
                    System.out.println("Not Inserted Succesffully");
                    }
                    } catch (ArrayIndexOutOfBoundsException e) {
                        System.out.println("Insertion Overflowed");
        }
    }
    public static void main(String[] args){
        InsertionArrays obj = new InsertionArrays(7);
        obj.insert(0,22);
        obj.insert(3,88);
        obj.insert(11,22);
    }
}