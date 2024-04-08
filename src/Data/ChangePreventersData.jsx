export const smells = [
    {
      id: 1,
      section: "shotgunsurgery",
      title: "Divergent Change",
      image: "/images/divergentchange.png",
      paragraph1: `Divergent change terjadi ketika sebuah class/method mengalami perubahan yang terlalu sering dengan maksud yang berbeda.
       Saat digunakan oleh class/method lain, hal tersebut akan menyebabkan terjadinya sebuah error karena saat class/method tersebut ada 
       perubahan maka class/method yang menggunakannya juga harus mengalami peruabahan. Pada dasarnya sebuah class memiliki relasi 
       one-to-one yaitu keadaan ketika hanya ada satu perubahan yang memengaruhi satu class.`,
      paragraph2: `Smell ini dapat ditanggulangi dengan membuat extract class/method yang dibuat untuk menampung class/method, bila banyak class/method mempunyai sifat yang sama maka bisa diterapkan inherintance. `,
      paragraph3: `Adanya duplikasi kode pada bagian iterasi, ketika iterasi ingin diubah pada salah satu method, maka method lain harus diganti juga. Untuk itu dilakukan extract method, akan dibuat method baru untuk menampung interasi, sehingga ketika iterasi ingin diubah maka hanya method iterasi saja yang perlu diubah `,
      code1: `package CommentsBefore
  
      public class Student {
        
        private String name;
        private String NIM;
        private String kelas;
        
        public Student(String name, String nIM, String kelas) {
          super();
          this.name = name;
          NIM = nIM;
          this.kelas = kelas;
        }
        
        // Disini print nama, nim, dan kelas
        public void gamauKasiTauIniApa(Student s) {
          System.out.println("Nama adalah " + s.name + ", NIM adalah " + s.NIM + ", kelasnya " + s.kelas);
        }
      }`,
      code2: `package CommentsAfter;
  
      public class Student {
      
        private String name;
        private String NIM;
        private String kelas;
        
        public Student(String name, String nIM, String kelas) {
          super();
          this.name = name;
          NIM = nIM;
          this.kelas = kelas;
        }
      
        public void printNamaNimKelas(Student s) {
          System.out.println("Nama adalah " + s.name + ", NIM adalah " + s.NIM + ", kelasnya " + s.kelas);
        }
        
      }
      `,
      source: "https://github.com/Samu22bd/Bad-Smell-Code/tree/main/Code%20Smell%20Git%20Source/Change%20Preventers/Divergent%20Change"
    },
    {
      id: 2,
      section: "PIH",
      title: "Shotgun Surgery",
      image: "/images/shotgunsurgery.png",
      paragraph1: `Shotgun surgery merupakan kebalikan dari divergent change, bila pada divergent change banyak perubahan memengaruhi satu class/method maka pada shotgun sugery satu perubahan memengaruhi banyak class/method. Ketika ada suatu method yang mengalami perubahan pada satu class dan method tersebut digunakan pada class lain, maka semua class juga harus melakukan perubahan. `,
      paragraph2: `Untuk menanggulangi smell ini, move method dan move field dapat digunakan. Ketika ada suatu ada method yang memerlukan perubahan, method tersebut dapat dipindahkan ke class yang terkait atau membuat class baru bila tidak terkait dengan class lain.  `,
      paragraph3: `Ada duplikasi kode “total”  yang memiliki fungsi berbeda, pada method “calculateTotal” variabel total memiliki fungsi untuk menghitung jumlah, sedangkan pada method “printOrder” variabel total digunakan untuk menampilkan total.
      Untuk mengatasi code smell tersebut, dapat dilakukan refactoring dengan teknik "Extract Method": 
      Buat method baru bernama calculateTotalPrice untuk menghitung total harga.  
      Pindahkan kode perhitungan total dari printOrder ke calculateTotalPrice. 
      Pada printOrder, panggil method calculateTotalPrice untuk mendapatkan total harga. `,
      code1: `public class Order { 

  

        private String customerName; 
    
        private List<OrderItem> items; 
    
        private Address shippingAddress; 
    
      
    
        public void calculateTotal() { 
    
            double total = 0; 
    
            for (OrderItem orderItem : items) { 
    
                total += orderItem.getPrice() * orderItem.getQuantity(); 
    
            } 
    
            this.total = total; 
    
        } 
    
      
    
        public void printOrder() { 
    
            System.out.println("Customer Name: " + customerName); 
    
            for (OrderItem orderItem : items) { 
    
                System.out.println("Item Name: " + orderItem.getName()); 
    
                System.out.println("Item Quantity: " + orderItem.getQuantity()); 
    
            } 
    
            System.out.println("Shipping Address: " + shippingAddress.toString()); 
    
            System.out.println("Total: " + total); 
    
        } 
    
      
    
    } `,
      code2: `public class Order { 

  

        private String customerName; 
    
        private List<OrderItem> items; 
    
        private Address shippingAddress; 
    
      
    
        public double calculateTotalPrice() { 
    
            double total = 0; 
    
            for (OrderItem orderItem : items) { 
    
                total += orderItem.getPrice() * orderItem.getQuantity(); 
    
            } 
    
            return total; 
    
        } 
    
      
    
        public void printOrder() { 
    
            System.out.println("Customer Name: " + customerName); 
    
            for (OrderItem orderItem : items) { 
    
                System.out.println("Item Name: " + orderItem.getName()); 
    
                System.out.println("Item Quantity: " + orderItem.getQuantity()); 
    
            } 
    
            System.out.println("Shipping Address: " + shippingAddress.toString()); 
    
            System.out.println("Total: " + calculateTotalPrice()); 
    
        } 
    
      
    
    } `,
    source: "https://github.com/Samu22bd/Bad-Smell-Code/tree/main/Code%20Smell%20Git%20Source/Change%20Preventers/Shotgun%20Surgery"
    },
    {
      id: 3,
      section: "",
      title: "Parallel Inheritance Hierarchies",
      image: "/images/PIH.png",
      paragraph1: `Parratel Inheritance Hierarchies merupakan keadaan ada sebuah class yang mempunyai sub class ketika class ingin menambahkan suatu method maka sub class juga harus menambahkan method. Hal tersebut menyebabkan sub class mempunyai method yang tidak diketahui fungsinya sehingga method tersebut akan terabaikan yang menyebabkan smell baru. `,
      paragraph2: `Untuk menghilangkan smell ini code harus di de-duplicate. Ada beberapa langkah yang harus dilakukan, yang pertama membuat instansi dari satu hierarki merujuk ke instansi hierarki lain menggunakan teknik delegasi atau komposisi, kemudian hapus hierarki dalam kelas yang dirujuk menggunakan move method dan move field agar fungsionalitas tidak hilang. `,
      paragraph3: `Pada kode before, saat kita ingin menambahkan suatu product pada class Item, maka kita juga perlu menambahkan ItemPriceCalculator untuk produk tersebut. Maka pada kode after, method pada ItemPriceCalculator dipindahkan ke class Item`,
      code1: `package parallelInheritanceBefore;

      public class Item {
        
        public Integer price;
        
        public Item() {
          // TODO Auto-generated constructor stub
        }
        
      }
      
      
      package parallelInheritanceBefore;
      
      public class Handphone extends Item{
      
        public Handphone() {
          // TODO Auto-generated constructor stub
        }
        
      }
      
      package parallelInheritanceBefore;
      
      public class Laptop extends Item{
      
        public Laptop() {
          // TODO Auto-generated constructor stub
        }
      
      }
      
      
      package parallelInheritanceBefore;
      
      public interface ItemPrice {
      
        public Integer PriceCalculator(Item I);
      
      }
      
      package parallelInheritanceBefore;
      
      public class HandphonePriceCalculator implements ItemPrice{
      
        Integer discount;
        @Override
        public Integer PriceCalculator(Item I) {
          // TODO Auto-generated method stub
          Handphone H = (Handphone)I;
          return H.price - discount;
        }
      
      
      }
      
      package parallelInheritanceBefore;
      
      public class LaptopPriceCalculator implements ItemPrice{
        
        Integer discount;
        @Override
        public Integer PriceCalculator(Item I) {
          // TODO Auto-generated method stub
          Laptop L = (Laptop)I;	
          return L.price - discount;
        }
      
      }`,
      code2: `package parallelInheritanceAfter;

      public abstract class Item {
        
        public Integer price;
      
        public Item() {
          // TODO Auto-generated constructor stub
        }
        
        public abstract Integer PriceCalculator(Item I);
      }
      
      
      package parallelInheritanceAfter;
      
      public class Handphone extends Item{
        
        public Integer discount;
      
        public Handphone() {
          // TODO Auto-generated constructor stub
        }
        
        @Override
        public Integer PriceCalculator(Item I) {
          // TODO Auto-generated method stub
          Handphone H = (Handphone)I;
          return H.price - discount;
        }
      
      }
      
      
      package parallelInheritanceAfter;
      
      public class Laptop extends Item{
        
        public Integer discount;
        
        public Laptop() {
          // TODO Auto-generated constructor stub
        }
        
        @Override
        public Integer PriceCalculator(Item I) {
          // TODO Auto-generated method stub
          Laptop L = (Laptop)I;	
          return L.PriceCalculator(I) - discount;
        }
      }`,
      source: "https://github.com/Samu22bd/Bad-Smell-Code/tree/main/Code%20Smell%20Git%20Source/Change%20Preventers/Parallel%20Inheritance%20Hierarchies"
    },
  ]
  
  
export const references = [
  {
    id: 1,
    url: "https://code-smells.com/change-preventers/divergent-change"
  }
]