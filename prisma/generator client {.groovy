generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model Signup {
  id        Int      @id @default(autoincrement())
  email     String
  createdAt DateTime @default(now())
}

+ // هذا نموذج جديد للمزوّدين
+ model Provider {
+   id        Int      @id @default(autoincrement())
+   name      String
+   field     String
+   rating    Float
+   lang      String
+   img       String?
+   keywords  String[]   // Array of keywords
+   isActive  Boolean   @default(true)
+   // ... أضف هنا أي حقول أخرى تحتاجها
+ }
