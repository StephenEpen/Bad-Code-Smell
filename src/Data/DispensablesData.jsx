export const smells = [
    {
        id: 1,
        section: "duplicatecode",
        title: "Comments",
        image: "../public/assets/comments.png",
        paragraph1: `Comments adalah bagian code yang diisikan comment untuk menjelaskan. Umumnya terjadi saat seorang programmer menyadari kodingannya kurang jelas ingin membuat kodingannya mudah dipahami. Tetapi, kodingan yang baik sudah dapat dijelaskan melalui namanya saja. Misalkan method calculateArea adalah sebuah method untuk menghitung luas. `,
        paragraph2: `Cara untuk menyelesaikan bad smell code ini adalah dengan memakai nama method yang lebih sesuai, extract method, ataupun extract variable. `,
        paragraph3: `Pada kode before, method “gamauKasiTauIniApa” tidak jelas, sehingga perlu diberikan comment “Disini print nama, nim, dan kelas” agar kita mengetahui kegunaan methodnya. Nama method akhirnya diubah menjadi “printNamaNimKelas” pada kode after agar memperjelas kegunaan dari method. `,
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
    `
    },
    {
        id: 2,
        section: "lazyclass",
        title: "Duplicate Code",
        image: "../public/assets/duplicatecode.png",
        paragraph1: `Duplicate code adalah bagian code yang sama ataupun mirip. Umumnya terjadi saat beberapa programmer mengerjakan bagian berbeda dari program yang sama. Kode seolah-olah terlihat berbeda tetapi sebenernya melakukan hal yang sama. `,
        paragraph2: `Cara untuk menyelesaikan bad smell code ini umumnya adalah dengan extract method, tetapi terkadang extract class maupun extract superclass juga digunakan.`,
        paragraph3: `Pada kode before, terdapat 2 method di kelas yang berbeda dengan fungsi yang mirip, sehingga dibuatkan sebuah parent class, dan method yang 2 itu disatukan dan dipindahkan kepada parent class pada kode after. `,
        code1: `package duplicateCodeBefore;

    public class ComSci {
    
        private String Name;
        private String NIM;
        protected String khususCom;
    
        public ComSci(String name, String nIM) {
            super();
            Name = name;
            NIM = nIM;
            khususCom = "Com";
        }
    
        public void getComData(ComSci C) {
            System.out.println("Nama adalah " + C.getName());
            System.out.println("NIM adalah  " + C.getNIM());
            System.out.println("Jurusan adalah " + C.khususCom);
        }
    
        public String getName() {
            return Name;
        }
    
        public void setName(String name) {
            Name = name;
        }
    
        public String getNIM() {
            return NIM;
        }
    
        public void setNIM(String nIM) {
            NIM = nIM;
        }
    }

    public class CybSec {
	
        private String Name;
        private String NIM;
        protected String khususCyb;
        
        public CybSec(String name, String nIM) {
            super();
            Name = name;
            NIM = nIM;
            khususCyb = "Cyb";
        }

        public void getCybData(CybSec C) {
            System.out.println("Nama adalah " + C.getName());
            System.out.println("NIM adalah  " + C.getNIM());
            System.out.println("Jurusan adalah " + C.khususCyb);
        }

        public String getName() {
            return Name;
        }

        public void setName(String name) {
            Name = name;
        }

        public String getNIM() {
            return NIM;
        }

        public void setNIM(String nIM) {
            NIM = nIM;
        }
    }
`,
        code2: `package duplicateCodeAfter;

        public class Mahasiswa {
            
            private String Name;
            private String NIM;
        
            public Mahasiswa(String name, String nIM) {
                super();
                Name = name;
                NIM = nIM;
            }
        
            public void getData() {
                System.out.println("Nama adalah " + this.getName());
                System.out.println("NIM adalah  " + this.getNIM());	
                if(this instanceof ComSci) {
                    ComSci C = (ComSci)this;
                    C.getKhususCom();
                }else {
                    CybSec C = (CybSec)this;
                    C.getKhususCyb();
                }
            }
        
            public String getName() {
                return Name;
            }
        
            public void setName(String name) {
                Name = name;
            }
        
            public String getNIM() {
                return NIM;
            }
        
            public void setNIM(String nIM) {
                NIM = nIM;
            }
        }

public class ComSci extends Mahasiswa{

	private String khususCom;

	public ComSci(String name, String nIM, String khususCom) {
		super(name, nIM);
		this.khususCom = khususCom;
	}

	public void printCom() {
		System.out.println("Jurusan adalah" + this.khususCom);
	}

	public String getKhususCom() {
		return khususCom;
	}

	public void setKhususCom(String khususCom) {
		this.khususCom = khususCom;
	}
	
}

public class CybSec extends Mahasiswa {

	private String khususCyb;

	public CybSec(String name, String nIM, String khususCyb) {
		super(name, nIM);
		this.khususCyb = khususCyb;
	}
	
	public void printCyb() {
		System.out.println("Jurusan adalah" + this.khususCyb);
	}
	
	public String getKhususCyb() {
		return khususCyb;
	}

	public void setKhususCyb(String khususCyb) {
		this.khususCyb = khususCyb;
	}

}
`,
    },
    {
        id: 3,
        section: "dataclass",
        title: "Lazy Class",
        image: "../public/assets/lazyclass.png",
        paragraph1: `Lazy class adalah class yang hampir tidak memiliki fungsi, seperti hanya satu fungsi. Umumnya terjadi karena suatu class yang sebelumnya banyak bekerja terkena refactoring dan kehilangan mayoritas fungsinya, ataupun sebuah class yang di desain untuk digunakan kedepannya tetapi tidak digunakan. `,
        paragraph2: `Cara untuk menyelesaikan bad smell code ini adalah dengan menggabungkan fitur kelas ke kelas lain, bahkan ke parent classnya. `,
        paragraph3: `Pada kode before, kelas Rectangle membutuhkan method dari RectangleAreaCalculator yaitu calculateArea untuk menghitung luas, karena kelas RectangleAreaCalculator hanya memiliki satu fungsi, ia merupakan sebuah lazy class dan methodnya dipindahkan kepada kelas Rectangle saja pada kode after. `,
        code1: `package LazyClassBefore;

        public class Rectangle extends RectangleAreaCalculator{
        
            private Integer width;
            private Integer length;
            
            public Rectangle(Integer width, Integer length) {
                super();
                this.width = width;
                this.length = length;
            }
        
            public Integer getArea() {
                return this.calculateArea(this.width, this.length);
            }
            
            public void printWidLen() {
                System.out.println(this.width + " " + this.length);
            }
            
            public Integer getWidth() {
                return width;
            }
        
            public void setWidth(Integer width) {
                this.width = width;
            }
        
            public Integer getLength() {
                return length;
            }
        
            public void setLength(Integer length) {
                this.length = length;
            }
        
        }
        
        package LazyClassBefore;

public class RectangleAreaCalculator {
	
	public Integer calculateArea(int a, int b) {
		return a*b;
	}
}
`,
        code2: `package LazyClassAfter;

        public class Rectangle{
        
            private Integer width;
            private Integer length;
            
            public Rectangle(Integer width, Integer length) {
                super();
                this.width = width;
                this.length = length;
            }
        
            public Integer getArea() {
                return this.width * this.length;
            }
            
            public void printWidLen() {
                System.out.println(this.width + " " + this.length);
            }
            
            public Integer getWidth() {
                return width;
            }
        
            public void setWidth(Integer width) {
                this.width = width;
            }
        
            public Integer getLength() {
                return length;
            }
        
            public void setLength(Integer length) {
                this.length = length;
            }
        
        }
        `,
    },
    {
        id: 4,
        section: "deadcode",
        title: "Data Class",
        image: "../public/assets/dataclass.png",
        paragraph1: `Data class adalah class yang hanya memiliki data dan getter setter saja, tidak memiliki kegunaan dan tidak dapat mengolah data yang mereka punya. Umumnya terjadi pada saat awal pembuatan suatu class yang masih belum memiliki method-method.`,
        paragraph2: `Cara untuk menyelesaikan bad smell code ini adalah dengan membuat data menjadi private, menambahkan method kepada class ini, ataupun dengan memindahkan data ke class lain yang menggunakan data dari class ini.`,
        paragraph3: `Pada kode before, kelas Student hanya menyimpan data serta getter setter saja. Maka kelas Student diberikan method miliknya agar tidak hanya menyimpan data dan getter setter saja, sehingga tidak merupakan data class lagi pada kode after. `,
        code1: `package DataClassBefore;

        public class Student {
            
            private String Name;
            private Integer NIM;
            
            public Student(String name, Integer nIM) {
                super();
                Name = name;
                NIM = nIM;
            }
        
            public String getName() {
                return Name;
            }
        
            public void setName(String name) {
                Name = name;
            }
        
            public Integer getNIM() {
                return NIM;
            }
        
            public void setNIM(Integer nIM) {
                NIM = nIM;
            }
            
        }
        `,
        code2: `package DataClassAfter;

        public class Student {
            
            private String Name;
            private Integer NIM;
            
            public Student(String name, Integer nIM) {
                super();
                Name = name;
                NIM = nIM;
            }
        
            public void belajar(Student S) {
                System.out.println(S.getName() + ", dengan NIM " + S.getNIM() + " sedang belajar");
            }
            
            public Integer getNimModuloBy6() {
                return NIM % 6;
            }
            
            public String getName() {
                return Name;
            }
        
            public void setName(String name) {
                Name = name;
            }
        
            public Integer getNIM() {
                return NIM;
            }
        
            public void setNIM(Integer nIM) {
                NIM = nIM;
            }
            
        }
        `,
    },
    {
        id: 5,
        section: "spegen",
        title: "Dead Code",
        image: "../public/assets/deadcode.png",
        paragraph1: `Dead code adalah sebuah variabel, parameter, method, dan lainnya sudah tidak digunakan lagi. Umumnya terjadi saat terjadi perubahan ataupun koreksi kepada kodingan. Ataupun saat kodingan memiliki banyak kondisional dan ada suatu cabang yang tidak bekerja, baik karena kondisinya tidak akan pernah terpenuhi maupun fungsi dari cabangnya yang tidak bekerja dengan baik.`,
        paragraph2: `Cara untuk menyelesaikan bad smell code ini adalah dengan menggunakan IDE (Integrated Development Environment) yang baik, melakukan pengecekan untuk penghapusan kode yang tidak diperlukan, dan sebagainya.`,
        paragraph3: `Pada kode before, terdapat kodingan setelah suatu return, sehingga ia tidak akan dipanggil. Maka, kodingan yang ada setelah return dihilangkan pada kode after. `,
        code1: `package DeadCodeBefore;

        import java.util.Vector;
        
        public class Company {
            
            private String companyName;
            private Vector<Worker> workerList;
            
            public Company(String companyName, Vector<Worker> workerList) {
                super();
                this.companyName = companyName;
                this.workerList = workerList;
            }
            
            public String addWorker(Company C, Worker W) {
                C.workerList.add(W);
                return "Worker added to list";
                
                if(workerList == null) {
                    return "company doesnt have worker list";
                }else {
                    return "company have worker list";
                }
            }
        
        }
        package DeadCodeBefore;

public class Worker {

	private String ID;
	private String name;
	
	public Worker(String iD, String name) {
		super();
		ID = iD;
		this.name = name;
	}
	
	public String dapatGaji() {
		String temp = this.name + " dengan ID " + this.ID + " mendapat gaji";
		return temp;
	}
	
	public String dapatPromosi() {
		String temp = this.name + " dengan ID " + this.ID + " mendapat promosi";
		return temp;
	}
	

	public String getID() {
		return ID;
	}

	public void setID(String iD) {
		ID = iD;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
`,
        code2: `package DeadCodeAfter;

        import java.util.Vector;
        
        public class Company {
            
            private String companyName;
            private Vector<Worker> workerList;
            
            public Company(String companyName, Vector<Worker> workerList) {
                super();
                this.companyName = companyName;
                this.workerList = workerList;
            }
        
            public String addWorker(Company C, Worker W) {
                C.workerList.add(W);
                return "Worker added to list";
            }
        
        }
        
        package DeadCodeAfter;

public class Worker {
	
	private String ID;
	private String name;
	
	public Worker(String iD, String name) {
		super();
		ID = iD;
		this.name = name;
	}
	
	public String getGaji() {
		String temp = this.name + " dengan ID " + this.ID + " mendapat gaji";
		return temp;
	}
	
	public String dapatPromosi() {
		String temp = this.name + " dengan ID " + this.ID + " mendapat promosi";
		return temp;
	}
	
	public String getID() {
		return ID;
	}

	public void setID(String iD) {
		ID = iD;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
`,
    },
    {
        id: 6,
        section: "",
        title: "Speculative Generality",
        image: "../public/assets/spegen.png",
        paragraph1: `Speculative generality terjadi saat ada sebuah class, method, ataupun parameter yang tidak digunakan. Hal ini akan membuat kode menjadi sulit dimengerti. Umumnya terjadi saat seorang programer berspekulasi bahwa apa yang dibuatnya akan dibutuhkan, dan kodenya masih tidak digunakan. `,
        paragraph2: `Cara untuk menyelesaikan bad smell code ini adalah dengan memindahkan method ke kelas lainnya, menggabungkan kelas, menghapus yang tidak perlu dan sebagainya.`,
        paragraph3: `Pada kode before, programmer berspekulasi mobil akan terbang, karena tidak digunakan, method terbang dihapus pada kode after. `,   
        code1: `package SpeculativeGeneralityBefore;

        public class Vehicle {
            
            private String name;
            private String engine;
            private Integer fuel;
            
            private String sayap;
            
            public Vehicle(String name, String engine, Integer fuel) {
                super();
                this.name = name;
                this.engine = engine;
                this.fuel = fuel;
            }
            
            public void spesifikasiMobil(Vehicle V) {
                System.out.println("Nama mobil adalah " + V.name + " dengan mesin" + V.engine);
            }
        
            public void terbang(String sayap) {
                System.out.println("Suatu saat sayap" + sayap + "akan membuat mobil terbang, let's gooo");
            }
        
            public String getName() {
                return name;
            }
        
            public void setName(String name) {
                this.name = name;
            }
        
            public String getEngine() {
                return engine;
            }
        
            public void setEngine(String engine) {
                this.engine = engine;
            }
        
            public Integer getFuel() {
                return fuel;
            }
        
            public void setFuel(Integer fuel) {
                this.fuel = fuel;
            }
        
            public String getSayap() {
                return sayap;
            }
        
            public void setSayap(String sayap) {
                this.sayap = sayap;
            }
        }
        `,
        code2: `package SpeculativeGeneralityAfter;

        public class Vehicle {
        
            private String name;
            private String engine;
            private Integer fuel;
            
            public Vehicle(String name, String engine, Integer fuel) {
                super();
                this.name = name;
                this.engine = engine;
                this.fuel = fuel;
            }
        
            public void spesifikasiMobil(Vehicle V) {
                System.out.println("Nama mobil adalah " + V.name + " dengan mesin" + V.engine);
            }
        
            public String getName() {
                return name;
            }
        
            public void setName(String name) {
                this.name = name;
            }
        
            public String getEngine() {
                return engine;
            }
        
            public void setEngine(String engine) {
                this.engine = engine;
            }
        
            public Integer getFuel() {
                return fuel;
            }
        
            public void setFuel(Integer fuel) {
                this.fuel = fuel;
            }
        }
        `,
    },
]


export const references = [
    {
        id: 1,
        url: "https://code-smells.com/change-preventers/divergent-change"
    }
]
