define( [ 'snap' ],
function( Snap ){

  return Snap.plugin(function( Snap, Element, Paper ){

    Paper.prototype.bubblePoint = function( x, y, area ){

      var radius = Math.sqrt( area / Math.PI );

      return this.circle( x, y, radius );

    };

  });

} );