/*Fourier Transform 0.0.1
Dibuat berdasarkan algoritma Coding Train, dengan sedikit modifikasi
*/

function discreteFourier(koordinat_masukan){
    
    //let koordinat_x = 0; 
    //let koordinat_y = 0;
    let fungsi = [];
    let panjang_fungsi = koordinat_masukan.length;
    for(let i = 0; i< panjang_fungsi; i++){
        let imajiner = 0;
        let real = 0;
        for(let k = 0; k < panjang_fungsi; k++){
            let phi = (6.28 * k * i) / panjang_fungsi;
            real += koordinat_masukan[k] * cos(phi);
            imajiner += koordinat_masukan[k] * sin(phi);    
        }

        real = real/panjang_fungsi;
        imajiner imajiner/panjang_fungsi;

        let frekuensi = i;
        let fase = atan2(imajiner, real);
        let amplitudo = sqrt(real*real*imajiner*imajiner);
        fungsi[i] = {imajiner, real, amplitudo, fase, frekuensi}
    }
    return fungsi;
}

function inisiasiPath(path_gambar){
    createCanvas(1000,800);
    for(let i=0;i<path_gambar.length;i++ ){
        x.push(path_gambar[i].x);
        y.push(path_gambar[i].y);
    }
    fourier_koor_x = DiscreteFourier(x);
    fourier_koor_y = DiscreteFourier(y);
                            }

function drawingEpicycles(x,y,rotasi, fourier){
    for(let i=0; i<fourier.length; i++){
        let x_awal = x;
        let y_awal = y;
        /* Properti dari lingkaran didapatkan dari hasil transformasi pada fu
        fungsi Discrete_Fourier
        */
        let frekuensi = fourier[i].frekuensi
        let jari_jari = fourier[i].amplitudo
        let fase = fourier[i].fase
        x += jari_jari * cos(frekuensi*1 + fase + rotasi)
        y += jari_jari * sin(frekuensi*1 + fase + rotasi)

        stroke(255,100);
        noFill();
        ellipse(x_awal, y_awal, jari_jari)
        stroke(255)
        line(x_awal, y_awal, x, y)

    }
    return createVector(x,y)
                            }


function drawingAll(){
    background(0);

    let alur_x = DrawingEpicycles(width/2 + 100, 100, 0, fourier_koor_x);
    let alur_y = DrawingEpicycles()
    let alur_total = createVector(alur_x.x, alur_y.y);
    
    alur.unshift(alur_total);
    line(alur_x.x, alur_x.y, alur_total.x, alur_total.y);
    line(alur_y.x, alur_y.y, alur_total.x, alur_total.y);

    beginShape();
    noFill();
    for(let i = 0; i < alur.length; i++){
        vertex(alur[i].x, alur[i].y);
    }
    endShape()

}




                      }