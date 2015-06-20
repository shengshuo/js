erial_maker = function ( ) {
    var prefix = '';
    var seq = 0;
    return {
        set_prefix: function (p) {
            prefix = String(p);
        },
        set_seq: function (s) {
            seq = s;
        },
        gensym: function ( ) {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};//();

var seqer = serial_maker();
//seqer.prefix = 'L';
//seqer.set_prefix('Q');
//seqer.set_seq(1000);
//
//console.log(seqer.gensym());
//
//var unique = seqer.gensym();
//console.log(unique);
//
////serial_maker.set_prefix('Q');
////serial_maker.set_seq(1000);
//
////console.log(serial_maker.gensym());
//
////var unique = serial_maker.gensym();
////console.log(unique);
