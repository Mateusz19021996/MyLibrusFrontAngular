class Person 
    {
        public string Name { get; set; }

        public int Age { get; set; }

        public Person()
        {

        }

        public Person(string name, int age)
        {            
            Name = "mariusz lajs";
            Age = age;            
        }
    }

    class Man : Person
    {
        public int Salary { get; set; }

        // wywołanie tego konstruktora powoduje po prostu utworzenie klasy Man i przypisanie wartości z
        // Man man = new Man("tomasz", 45,1000);  output name: tomasz
        //public Man(string name, int age, int salary)
        //{
        //    Salary = salary;
        //    Name = name;
        //    Age = age;
        //}

        // tutaj natomiast wywoła się konstruktor z klasy bazowej czyli w domyśle to co jest zakomentowane w poniższym konsktuktorze
        public Man(string name, int age, int salary) : base(name, age)
        {
            //Name = "mariusz lajs";
            //Age = age;
            Salary = salary;
        }
    }
