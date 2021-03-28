var tabel = document.getElementById('tabel'),
 
            nama = document.getElementById('nama'),
            nim = document.getElementById('nim'),
            dept = document.getElementById('dept'),
            email = document.getElementById('email'),
            btnTambah = document.getElementById('btnTambah'),
            form = document.getElementById('isian'),
            pesan = document.getElementById('pesan'),

            db;         
 
        function addBaris(e) {
            if (tabel.rows.namedItem(nim.value)) {
                pesan.textContent = 'Nim sudah terdaftar !';
                e.preventDefault();
                return;
            }
            if (tabel.rows.namedItem(email.value)) {
                pesan.textContent = 'Email sudah terdaftar !';
                e.preventDefault();
                return;
            }
        var baris = tabel.insertRow();
            baris.id = nim.value;
            
            baris.insertCell().appendChild(document.createTextNode(nama.value));
            baris.insertCell().appendChild(document.createTextNode(nim.value));
            baris.insertCell().appendChild(document.createTextNode(dept.value));
            baris.insertCell().appendChild(document.createTextNode(email.value));
 
            var hapus = document.createElement('input');
                hapus.type = 'button';
                hapus.value = 'Hapus';
                hapus.id = nim.value;            
                baris.insertCell().appendChild(hapus);

            inputKeDatabase({
                nama: nama.value,
                nim: nim.value,
                dept: dept.value,
                email: email.value
            });
 
            e.preventDefault();
        }               
 
        form.addEventListener('submit', addBaris, false);                  
        tabel.addEventListener('click', deleteBaris, true);      
        
        function handlerError(e) {
            pesan.innerHTML += 'Database Error: ' + e.target.errorCode + '<br>';      
        }
         
        function buatDatabase() {
            var request = window.indexedDB.open('latihan', 1);
            request.onerror = handlerError;
            request.onupgradeneeded = function(e) {             
                var db = e.target.result;
                db.onerror = handlerError;                          
                var objectstore = db.createObjectStore('mahasiswa', { keyPath: 'nim' });
                pesan.innerHTML += 'berhasil dibuat.<br>';
            }
            request.onsuccess = function(e) {           
                db = e.target.result;
                db.onerror = handlerError;                          
                pesan.innerHTML += 'Tersambung<br>';    
                read();           
            }
        }
         
        buatDatabase();

        function cetakPesanHandler(msg) {
            return function(e) {
                pesan.innerHTML += msg + '<br>';
            }
        }
        function hapus(nim) {
            var objectstore = buat().objectStore('mahasiswa');
            var request = objectstore.delete(nim);
            request.onerror = handlerError;
            request.onsuccess = cetakPesanHandler('Mahasiswa dengan nim ' + nim + ' dihapus dari database.');
        }

        function deleteBaris(e) {
            if (e.target.type=='button') {                
                tabel.deleteRow(tabel.rows.namedItem(e.target.id).sectionRowIndex);
                hapus(e.target.id);
            }
        }
         
        function buat() {
            var transaction = db.transaction(['mahasiswa'], 'readwrite');
            transaction.onerror = handlerError;
            transaction.oncomplete = cetakPesanHandler('SUKSES!.');                  
            return transaction;
        }
         
        function inputKeDatabase(mahasiswa) {      
            var objectstore = buat().objectStore('mahasiswa');
            var request = objectstore.add(mahasiswa);
            request.onerror = handlerError;
            request.onsuccess = cetakPesanHandler('Mahasiswa dengan nim ' + mahasiswa.nim + ' telah ditambahkan ke database.');            
        }

        function read() {
            var objectstore = buat().objectStore('mahasiswa');
            objectstore.openCursor().onsuccess = function(e) {
                var result = e.target.result;
                if (result) {
                    pesan.innerHTML += 'Mahasiswa dengan nama ' + result.value.nama + ' ada di database.<br>';


                    var baris = tabel.insertRow();                  
                    baris.id = result.value.nim;
                    baris.insertCell().appendChild(document.createTextNode(result.value.nama));
                    baris.insertCell().appendChild(document.createTextNode(result.value.nim));
                    baris.insertCell().appendChild(document.createTextNode(result.value.dept));
                    baris.insertCell().appendChild(document.createTextNode(result.value.email));

        class tombol{
            constructor(hapus){
                this.hapus =  document.createElement('input');
                this.hapus.type = 'button';
                this.hapus.value = 'hapus?';
                this.hapus.id = nim.value; 
                baris.insertCell().appendChild(this.hapus);
                    }
                        get Details(){
                            return baris.insertCell().appendChild(this.hapus)
                        }
        
                        set Details(Details){
                            this.hapus.value = Details;
                        }
                    }
                    const tombolini = new tombol();
                    tombolini.Details = 'Hapus'
                    console.log(tombol.Details);
                }
            }   
        }

       