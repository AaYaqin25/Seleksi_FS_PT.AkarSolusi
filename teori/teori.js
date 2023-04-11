/**
 * 1 Apa itu pola desain Singleton? Berikan contoh implementasi Singleton dalam bahasa pemrograman yang Anda kuasai
 * 
 * Jawaban: Singleton adalah pola desain yang digunakan untuk memastikan bahwa sebuah kelas hanya
 * memiliki satu instance dan memberikan akses global ke instance tersebut
 */

// implementasi Singleton di javascript :

const Singleton = (function () {
    let instance;

    function createInstance() {
        const object = new Object("Ini contoh objek Singleton");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);


/**
 * 2. Jelaskan perbedaan antara pola desain Factory dan Abstract Factory
 * 
 * Jawaban: Perbedaan utama antara pola desain Factory dan Abstract Factory terletak pada cara mereka membuat objek.
 * Factory pattern adalah pola desain yang mengizinkan kelas untuk membuat objek tanpa harus secara eksplisit menentukan kelas yang akan dibuat.
 * Sedangkan, Abstract Factory pattern adalah pola desain yang mengizinkan kelas untuk membuat keluarga objek yang terkait tanpa harus secara eksplisit menentukan kelas yang akan dibuat.
 */

/**
 * 3. Apa itu pola desain Observer? Berikan contoh implementasi Observer dalam bahasa pemrograman yang Anda kuasai.
 * 
 * Jawaban: Pola desain Observer adalah pola desain perilaku yang memungkinkan objek untuk mengirim dan menerima notifikasi ketika ada
 * perubahan pada objek yang diamati. Dalam pola Observer, objek yang mengirim notifikasi disebut subjek,
 * dan objek yang menerima notifikasi disebut observer.
 */

// implementasi pola desain Observer di javascript

// Subject 
class WeatherStation {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }

    // method untuk update data cuaca
    updateWeather(data) {
        console.log(`Cuaca di ${data.city} saat ini: ${data.temperature} derajat Celsius`);
        this.notifyObservers(data);
    }
}

// Observer
class PhoneDisplay {
    constructor(weatherStation) {
        this.weatherStation = weatherStation;
        this.weatherStation.addObserver(this);
    }

    update(data) {
        console.log(`Ponsel: Cuaca di ${data.city} saat ini: ${data.temperature} derajat Celsius`);
    }

    unsubscribe() {
        this.weatherStation.removeObserver(this);
    }
}

// Observer
class TVDisplay {
    constructor(weatherStation) {
        this.weatherStation = weatherStation;
        this.weatherStation.addObserver(this);
    }

    update(data) {
        console.log(`TV: Cuaca di ${data.city} saat ini: ${data.temperature} derajat Celsius`);
    }

    unsubscribe() {
        this.weatherStation.removeObserver(this);
    }
}

// Implementasi
const weatherStation = new WeatherStation();
const phoneDisplay = new PhoneDisplay(weatherStation);
const tvDisplay = new TVDisplay(weatherStation);

weatherStation.updateWeather({ city: 'Jakarta', temperature: 30 });
phoneDisplay.unsubscribe();

weatherStation.updateWeather({ city: 'Surabaya', temperature: 32 });
/**
 * 4. Apa itu pola desain MVC (Model-View-Controller)? Jelaskan bagaimana pola desain ini membantu dalam pengembangan aplikasi web.
 * 
 * Jawaban: MVC (Model-View-Controller) adalah sebuah pola desain arsitektur perangkat lunak yang membagi aplikasi ke dalam tiga
 * komponen utama yaitu Model, View, dan Controller.
 * 
 * Model: merepresentasikan data dan aturan bisnis yang berkaitan dengan data tersebut.
 * View: bertanggung jawab untuk menampilkan data dan interaksi dengan pengguna.
 * Controller: bertindak sebagai penghubung antara Model dan View, mengatur alur aplikasi dan memproses input dari pengguna.
 * 
 * Pola desain MVC membantu dalam pengembangan aplikasi web dengan memisahkan tugas dan tanggung jawab antara komponen Model, View, dan Controller.
 * Hal ini membantu dalam memperbaiki kode dengan lebih mudah, meningkatkan keterbacaan kode,
 * dan meningkatkan efisiensi waktu dan biaya dalam mengembangkan aplikasi web yang besar dan kompleks.
 * 
 * Contoh implementasi MVC dalam pengembangan aplikasi web adalah sebagai berikut:
 * 
 * Model: memproses data seperti pengambilan dan penyimpanan data ke dalam database.
 * View: menampilkan halaman web yang interaktif dan menarik.
 * Controller: mengatur alur aplikasi seperti mengatur navigasi antara halaman web, mengambil data dari Model, dan meneruskan data ke View.
 * 
 * Dengan memisahkan tugas dan tanggung jawab dalam komponen Model, View, dan Controller, aplikasi dapat diubah
 * dan dimodifikasi dengan lebih mudah tanpa mengganggu tugas dan tanggung jawab dari komponen lainnya.
 */


/**
 * 5. Apa itu Git? Jelaskan dengan singkat cara kerjanya.
 * 
 * Jawaban: Git adalah salah satu sistem pengontrol versi (version control system) yang paling populer
 * dan banyak digunakan oleh para pengembang perangkat lunak. Git memungkinkan pengguna untuk melacak dan 
 * mengelola perubahan pada kode program dan berkolaborasi dengan pengembang lain pada proyek yang sama. 
 * Git bekerja dengan menyimpan snapshot atau gambaran dari proyek pada suatu waktu tertentu,
 * dan kemudian menyimpan perbedaan antara setiap gambaran tersebut. Ketika ada perubahan pada kode program, 
 * pengguna dapat melakukan commit untuk menyimpan perubahan tersebut pada repository. 
 * Git juga memiliki fitur-fitur seperti branching dan merging, yang memudahkan pengguna untuk bekerja pada fitur-fitur baru tanpa mengganggu kode program yang sedang stabil.
 */

/**
 * 6. Apa itu commit? Jelaskan langkah-langkah untuk melakukan commit pada Git.
 * 
 * Jawaban: Commit dalam Git adalah proses untuk menyimpan perubahan yang telah dilakukan pada file atau direktori dalam repository Git.
 * Commit digunakan untuk memastikan bahwa perubahan tersebut dapat dipertahankan dan direkam dalam sejarah versi Git.
 * 
 * 1. pastikan ada di direktori yang ingin di commit menggunakan perintah cd pada terminal
 * 2. git status untuk mengecek di branch mana dan warna hijau atau merah
 * -kalau merah harus di git add nama file nya
 * -kalau hijau siap di commit 
 * -kalau modified berarti code yang sudah di commit di ubah/berubah
 * 3. git add untuk menambahkan file-file yang telah di ubah tersebut ke dalam staging area
 * 4. git commit -m "pesan commit" untuk melakukan commit pada file-file yang telah di ubah
 * 5. git push origin <nama_branch> jika ingin masuk remote repository github.com
 */

/**
 * 7. Apa itu branch? Jelaskan manfaat menggunakan branch pada Git.
 * 
 * Jawaban: Branch dalam Git adalah sebuah cabang yang terpisah dari kode sumber utama (main branch).
 * Dalam branch, pengembang dapat membuat perubahan tanpa mempengaruhi kode sumber utama. 
 * Branch juga memungkinkan untuk melakukan eksperimen, pengembangan fitur baru, 
 * dan memperbaiki bug secara terpisah dari kode sumber utama.
 * 
 * Manfaat menggunakan branch pada Git :
 * 1. Memudahkan pengembangan fitur baru
 * 2. Mengelola versi
 * 3. Memperbaiki bug
 * 4. Kolaborasi
 */

/**
 * 8. Apa itu konflik merge? Jelaskan cara menyelesaikan konflik merge di Git.
 * 
 * Jawaban: Konflik merge terjadi ketika dua atau lebih branch melakukan perubahan pada file yang sama dan 
 * di-commit pada waktu yang sama juga, sehingga Git tidak bisa secara otomatis menggabungkan perubahan tersebut. 
 * Hal ini sering terjadi pada tim yang bekerja pada repository yang sama
 * 
 * Untuk menyelesaikan konflik merge di Git, berikut langkah-langkah nya:
 * 
 * 1. Lakukan perintah git merge pada branch yang akan digabungkan (contoh: git merge develop).
 * 2. Git akan memberikan notifikasi tentang konflik merge pada file yang sama.
 * Untuk melihat file yang mengalami konflik, jalankan perintah git status.
 * 3. Buka file yang mengalami konflik pada editor teks, dan cari bagian yang menandakan konflik merge 
 * (biasanya ditandai dengan <<<<<<< HEAD, =======, dan >>>>>>> [nama_branch]).
 * 4. Lakukan perubahan pada file tersebut sesuai kebutuhan. Hapus tanda <<<<<<< HEAD, =======, dan >>>>>>> [nama_branch] 
 * setelah melakukan perubahan. Simpan perubahan tersebut.
 * 5. Jalankan perintah git add [nama_file] untuk menandai file yang sudah diubah.
 * 6. Lakukan perintah git commit untuk menyimpan perubahan merge dengan pesan commit yang jelas dan deskriptif.
 * 7. Lakukan push pada branch yang diupdate dengan perintah git push.
 */

/**
 * 9. Apa itu Git stash? Jelaskan cara menggunakan Git stash.
 * 
 * Jawaban: Git stash adalah fitur yang digunakan untuk menyimpan perubahan sementara pada Git. 
 * Git stash dapat digunakan ketika kita sedang bekerja pada suatu branch atau commit, 
 * namun kita harus beralih ke branch atau commit lain untuk menyelesaikan tugas yang mendesak. 
 * Dengan Git stash, kita dapat menyimpan perubahan yang belum di-commit dan kembali ke kondisi semula.
 * 
 * Berikut langkah-langkah menggunakan Git stash
 * 1. Tambahkan dan commit perubahan yang sudah dilakukan, atau pastikan bahwa tidak ada perubahan yang belum dicommit.
 * 2. Jalankan perintah git stash save "pesan" untuk menyimpan perubahan ke dalam stash. 
 * Pesan bisa diisi dengan deskripsi perubahan yang disimpan.
 * 3. Lakukan perintah git stash list untuk melihat daftar stash yang sudah disimpan.
 * 4. Untuk mengambil kembali perubahan yang disimpan di stash, jalankan perintah git stash apply. 
 * Jika terdapat beberapa stash, kita harus menambahkan nomor stash setelah perintah tersebut, seperti git stash apply stash@{nomor}.
 * 5. Setelah perubahan diambil kembali, kita bisa melakukan commit seperti biasa untuk menyimpan perubahan tersebut.
 */

/**
 * 10. Jelaskan perbedaan antara Git reset dan Git revert.
 * 
 * Jawaban: Git reset dan Git revert adalah dua perintah yang digunakan dalam Git untuk mengembalikan perubahan yang dilakukan
 * pada suatu repositori. Namun, keduanya memiliki perbedaan utama dalam cara kerjanya.
 * 
 * Git reset mengembalikan repositori ke suatu keadaan yang telah ditentukan, menghapus semua commit setelah keadaan tersebut. 
 * Dalam hal ini, semua commit dan perubahan setelah keadaan tersebut akan hilang secara permanen. 
 * Git reset digunakan ketika kita ingin menghapus setiap perubahan setelah suatu titik tertentu dalam sejarah commit repositori.
 * 
 * Sedangkan Git revert mengembalikan repositori ke keadaan sebelum suatu commit tertentu, namun tetap mempertahankan sejarah commit yang ada. 
 * Dalam hal ini, commit yang merubah keadaan sebelumnya tidak dihapus, melainkan sebuah commit baru dibuat untuk membatalkannya. 
 * Git revert digunakan ketika kita ingin membatalkan suatu commit tertentu, namun masih ingin mempertahankan sejarah commit yang ada.
 * 
 * Dalam kesimpulannya, perbedaan utama antara Git reset dan Git revert adalah bahwa Git reset menghapus sejarah commit, 
 * sedangkan Git revert mempertahankan sejarah commit dan membuat commit baru untuk membatalkan perubahan.
 */