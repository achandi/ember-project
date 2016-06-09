export default function() {
  this.get('/items', function(db, request) {
    let items = [{ 
        type: 'items',
        id: 1,
        attributes: {
          title: 'Sour keys',
          price: 0.05,
          cover: 'candy/sourkeys.jpg',
          description: 'Tasty but sour and bad for your enamel.',
          isAvailable: true,
          likes: 0,
          dislikes: 0,
          quantity: 2400
        }
      }, {
        type: 'items',
        id: 2,
        attributes: {
          title: 'Pop Bottles',
          price: 0.10,
          cover: 'candy/popbottles.jpg',
          description: 'Sugary and sweet and tastes like cola.',
          isAvailable: true,
          likes: 0,
          dislikes: 0,
          quantity: 104
        }
      }, { 
        type: 'items',
        id: 3,
        attributes: {
          title: 'Jolly Ranchers',
          price: 0.10,
          cover: 'candy/jollyranchers.jpg',
          description: 'Hard candy with multiple flavours.',
          isAvailable: true,
          likes: 0,
          dislikes: 0,
          quantity: 4330
        }
      }, {  
        type: 'items',
        id: 4,        
        attributes: {
          title: 'Frogs',
          price: 0.05,
          cover: 'candy/frog.jpg',
          description: 'Sort of tasteless candy that looks cool but whatever.',
          isAvailable: true,
          likes: 0,
          dislikes: 0,
          quantity: 30
        }
      }, {
        type: 'items',
        id: 5,
        attributes: {
          title: 'Warheads',
          price: 0.20,
          cover: 'candy/warheads.jpg',
          description: 'Not for the faint of heart.. very sour.',
          isAvailable: true,
          likes: 0,
          dislikes: 0,
          quantity: 3230
        }
      }, {
        type: 'items',
        id: 6,
        attributes: {
          title: 'Black Licorice',
          price: 0,
          cover: 'candy/ blacklic.jpg',
          description: 'THIS IS NOT REAL CANDY! Yes it is available, but take it for free.',
          isAvailable: true,
          likes: 0,
          dislikes: 0,
          quantity: 95
        }
      }, {
        type: 'items',
        id: 7,
        attributes: {
          title: 'Best Candy Ever',
          price: 1000,
          cover: 'candy/magic.jpg',
          description: 'Bought by only the top 1% of 1%.',
          isAvailable: false,
          likes: 0,
          dislikes: 0,
          quantity: 0
        }
      }];
      if(request.queryParams.title !== undefined) {
        let filteredCandy = items.filter(function(i) {
        return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
      });
      return { data: filteredCandy };
    } else {
      return { data: items };
    }
  });
}