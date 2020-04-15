/** Add any JavaScript you need to this file. */
// 제품 리스트 - 만화로 합시다
// 제품은 사진, 이름, 설명, 카테고리, 가격이 있어야함

let ProductList = [
  {
    code: 'KOY01',
    name: 'Kimetsu no Yaiba',
    author: 'Kotoge Koyoharu',
    desc: 'Tanjirou fights with demons to protects his sister',
    ctgry: 'Action',
    price: '10.99'
  },
  {
    code: 'DBL01',
    name: 'DragonBall',
    author: 'Toriyama Akira',
    desc:
      'Bulma and Goku are looking for the Dragon Ball which is a legendary item that fulfill any wishes',
    ctgry: 'Adventure',
    price: '7.99'
  },
  {
    code: 'NRT01',
    name: 'Naruto',
    author: 'Kishimoto Masashi',
    desc: 'poor boy Naruto want to be the Hokage which rules Konoha mura and world strongest Ninja',
    ctgry: 'Action',
    price: '9.99'
  },
  {
    code: 'BLC01',
    name: 'Bleach',
    author: 'Kubo Tite',
    desc:
      'Ichigo, he can see the ghosts, one day he saved a demon god girl Rukia. and she gave her power Ichigo to fight with hollows',
    ctgry: 'Action',
    price: '5.99'
  },
  {
    code: 'MIA01',
    name: 'Made in Abyss',
    author: 'Tsukushi Akihito',
    desc:
      'There is a big hole on the island. The cave raiders dive into the hole to find ancient artifacts',
    ctgry: 'Adventure',
    price: '11.99'
  },
  {
    code: 'FMA01',
    name: 'Full metal Alchemist',
    author: 'Arakawa Hiromu',
    desc:
      "Famous alchemist brothers, Edward and Alphonse, they are looking for philosopher's stone that would can get back their lost body",
    ctgry: 'Adventure',
    price: '9.99'
  },
  {
    code: 'DGM01',
    name: 'Delicious in Dungeon',
    author: 'Kui Ryoko',
    desc:
      'Laios and his party enter the dungeon to rescue his sister, who was eaten by the dragon. However, they do not have any food, so they eat the monsters.',
    ctgry: 'Adventure',
    price: '11.99'
  },
  {
    code: 'GNM01',
    name: 'Gunnm - Battle Angel Alita',
    author: 'Kishiro Yukito',
    desc:
      'Ido, the cyborg doctor who is living in Scrapyard found a girl cyborg from dump. She was a cyborg warrior use Panzer Kunst',
    ctgry: 'Action',
    price: '9.99'
  },
  {
    code: 'SDK01',
    name: 'Slam Dunk',
    author: 'Inoue Takehiko',
    desc:
      'A bully boy, Sakuragi fell in love to a girl, Akagi. she ask him a question "Do you like basket ball?"',
    ctgry: 'Sports',
    price: '7.99'
  },
  {
    code: 'ESH01',
    name: 'EYESHIELD 21',
    author: 'Murata Yusuke',
    desc:
      'A Bullied boy, Sena become a football running back and tries to reach the Christmas Ball',
    ctgry: 'Sports',
    price: '7.99'
  }
];

function clearList() {
  var list = document.querySelector('#mangaList');
  list.innerHTML = '';
}

function tableCreator(product) {
  var table = document.createElement('table');
  table.className = 'detailTable';
  var tbody = document.createElement('tbody');
  function rowCreator(colomn, detail) {
    var tr = document.createElement('tr');
    var tdLeft = document.createElement('td');
    tdLeft.className = 'rowLeft';
    var tdRight = document.createElement('td');
    tdRight.className = 'rowRight';
    tdLeft.innerHTML = colomn;
    tdRight.innerHTML = detail;
    tr.appendChild(tdLeft);
    tr.appendChild(tdRight);
    return tr;
  }
  tbody.appendChild(rowCreator('Description', product.desc));
  tbody.appendChild(rowCreator('Genre', product.ctgry));
  tbody.appendChild(rowCreator('Price', product.price));
  table.appendChild(tbody);
  return table;
}

function getListAll() {
  var list_arr = [];
  for (var i = 0; i < ProductList.length; i++) {
    var temp = {
      code: ProductList[i].code,
      name: ProductList[i].name,
      author: ProductList[i].author,
      desc: ProductList[i].desc,
      ctgry: ProductList[i].ctgry,
      price: ProductList[i].price
    };
    list_arr.push(temp);
  }
  return list_arr;
}

function getListByGenre(Genre) {
  var list_arr = [];
  for (var i = 0; i < ProductList.length; i++) {
    if (Genre === ProductList[i].ctgry) {
      var temp = {
        code: ProductList[i].code,
        name: ProductList[i].name,
        author: ProductList[i].author,
        desc: ProductList[i].desc,
        ctgry: ProductList[i].ctgry,
        price: ProductList[i].price
      };

      list_arr.push(temp);
    }
  }
  return list_arr;
}

function cardBoxCreator(product) {
  // 박스 오브젝트 생성
  var box = document.createElement('li');
  box.className = 'box';
  var title = document.createElement('h1');
  title.innerHTML = product.name;
  box.appendChild(title);
  var author = document.createElement('h2');
  author.innerHTML = product.author;
  box.appendChild(author);
  // 이미지 오브젝트 생성해서 이미지 가져오기
  var div = document.createElement('div');
  div.class = '';
  var img = document.createElement('img');
  img.src = 'images/' + product.code + '.jpg';
  div.appendChild(img);
  box.appendChild(div);
  // 제목, 설명, 카테고리, 가격 출력하기
  var table = tableCreator(product);
  box.appendChild(table);

  return box;
}

function listCreator(ProductList) {
  var list_obj = document.createElement('li');
  for (var i = 0; i < ProductList.length; i++) {
    var box = cardBoxCreator(ProductList[i]);
    list_obj.appendChild(box);
    //  console.log(ProductList[i].name);
  }
  return list_obj;
}

// 카드 박스를 메인/#mainDisplay에 넣기
function menuSelector() {
  clearList();
  var all = getListAll();
  document.querySelector('#mangaList').appendChild(listCreator(all));

  document.querySelector('#menu_all').onclick = function() {
    clearList();
    document.querySelector('#subtitle').innerHTML = 'List of All Manga';
    var all = getListAll();
    document.querySelector('#mangaList').appendChild(listCreator(all));
  };

  document.querySelector('#menu_action').onclick = function() {
    clearList();
    document.querySelector('#subtitle').innerHTML = 'List of Action Manga';
    var act = getListByGenre('Action');
    document.querySelector('#mangaList').appendChild(listCreator(act));
  };

  document.querySelector('#menu_adv').onclick = function() {
    clearList();
    document.querySelector('#subtitle').innerHTML = 'List of Adventure Manga';
    var adv = getListByGenre('Adventure');
    document.querySelector('#mangaList').appendChild(listCreator(adv));
  };

  document.querySelector('#menu_sports').onclick = function() {
    clearList();
    document.querySelector('#subtitle').innerHTML = 'List of Sports Manga';
    var sports = getListByGenre('Sports');
    document.querySelector('#mangaList').appendChild(listCreator(sports));
  };
}

window.onload = menuSelector();
