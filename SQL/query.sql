-- 1
CREATE TABLE kota (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  kode VARCHAR(255) NOT NULL
);

CREATE TABLE kabupaten (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  kode VARCHAR(255) NOT NULL,
  kota_id INT NOT NULL,
  FOREIGN KEY (kota_id) REFERENCES kota(id)
);

CREATE TABLE kegiatan (
  id INT AUTO_INCREMENT PRIMARY KEY,
  kode VARCHAR(255) NOT NULL,
  nama VARCHAR(255) NOT NULL,
  tanggal_mulai DATE NOT NULL,
  tanggal_akhir DATE NOT NULL,
  kabupaten_id INT,
  kota_id INT NOT NULL,
  FOREIGN KEY (kabupaten_id) REFERENCES kabupaten(id),
  FOREIGN KEY (kota_id) REFERENCES kota(id)
);

-- 2
--a 
SELECT kegiatan.kode AS 'Kode Kegiatan', kegiatan.nama AS 'Nama Kegiatan', kegiatan.tanggal_mulai AS 'Tanggal Mulai', kegiatan.tanggal_akhir AS 'Tanggal Akhir', kota.nama AS 'Nama Kota', kabupaten.nama AS 'Nama Kabupaten' FROM kegiatan
LEFT JOIN kabupaten ON kabupaten.id = kegiatan.kabupaten_id
INNER JOIN kota ON kota.id = kegiatan.kota_id

--b
SELECT kode AS "Kode Kegiatan", nama AS "Nama Kegiatan", 
    IF(CURDATE() BETWEEN tanggal_mulai AND tanggal_akhir, 'Active', 'Inactive') AS "Status" 
FROM kegiatan
