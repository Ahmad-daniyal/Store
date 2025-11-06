print("=== Pilihan Bahasa ===")
print("1 = Indonesia")
print("2 = English")
print("3 = Jepang")

pilihan = input("Masukkan pilihan (1/2/3): ")

if pilihan == "1":
    print("Halo! Selamat datang di aplikasi ini 🇮🇩")
elif pilihan == "2":
    print("Hello! Welcome to this application 🇬🇧")
elif pilihan == "3":
    print("こんにちは！このアプリへようこそ 🇯🇵")
else:
    print("Pilihan tidak valid! Silakan masukkan 1, 2, atau 3.")