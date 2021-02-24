window.addEventListener('load', () => {
  const accout = document.getElementById('account-box');
  const login = document.getElementById('login');
  const sign = document.getElementById('sign');
  const d = accout || login || sign;
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const mw = document.getElementById('main-wraper');
  const show1 = document.getElementById('show1');
  const show2 = document.getElementById('show2');
  const show3 = document.getElementById('show3');
  const aitem1 = document.getElementById('aitem1');
  const aitem2 = document.getElementById('aitem2');
  const aitem3 = document.getElementById('aitem3');
  const edit = document.getElementById('edit');
  const edit2 = document.getElementById('edit2');
  const edit3 = document.getElementById('edit3');
  const create = document.getElementById('create');
  const row = document.getElementById('row');
  const up = document.getElementById('up');

  button2.style.display = "none";
  button3.style.display = "none";
  mw.style.display = "none";
  show1.style.display = "none";
  show2.style.display = "none";
  show3.style.display = "none";
  row.style.display = "none";

  
  button.addEventListener('click', ()=>{
    window.alert('日記アプリDailyへようこそ！\nこのアプリでは今日起きた出来事をアカウント事に保存して\n日記として記録することができます！\nまずは実際に見本で触ってみましょう！');
    d.style.display = "none";
    button.style.display = "none";
    button2.style.display = "block";
    mw.style.display = "block";

    // 見本ページのaitemがクリックされた時の挙動
    aitem1.addEventListener('click',()=>{
      mw.style.display = "none";
      button2.style.display = "none";
      button3.style.display = "block";
      show1.style.display = "block";
      button3.addEventListener('click', ()=>{
        show1.style.display = "none";
        button3.style.display = "none";
        button2.style.display = "block";
        mw.style.display = "block";
      })
    })

    aitem2.addEventListener('click',()=>{
      mw.style.display = "none";
      button2.style.display = "none";
      button3.style.display = "block";
      show2.style.display = "block";
      button3.addEventListener('click', ()=>{
        show2.style.display = "none";
        button3.style.display = "none";
        button2.style.display = "block";
        mw.style.display = "block";
      })
    })

    aitem3.addEventListener('click',()=>{
      mw.style.display = "none";
      button2.style.display = "none";
      button3.style.display = "block";
      show3.style.display = "block";
      button3.addEventListener('click', ()=>{
        show3.style.display = "none";
        button3.style.display = "none";
        button2.style.display = "block";
        mw.style.display = "block";
      })
    })
    // 見本ページのaitemがクリックされた時の挙動


  })
  
  button2.addEventListener('click', ()=>{
    d.style.display = "block";
    button.style.display ="block";
    button2.style.display ="none";
    mw.style.display = "none";
    show1.style.display = "none";
  })
  

  edit.addEventListener('click', ()=>{
    window.alert('ログインすることで、文章を修正することができます');
  })
  edit2.addEventListener('click', ()=>{
    window.alert('ログインすることで、文章を修正することができます');
  })
  edit3.addEventListener('click', ()=>{
    window.alert('ログインすることで、文章を修正することができます');
  })

  create.addEventListener('click',()=>{
    mw.style.display = "none";
    row.style.display = "block";
    button2.style.display = "none";
    button3.style.display = "block";
    button3.addEventListener('click', ()=>{
      button3.style.display = "none";
      button2.style.display = "block";
      mw.style.display = "block";
      row.style.display = "none";
    })
  })

  up.addEventListener('click', ()=>{
    window.alert('ログインすると記述した内容を保存することができます。');

    button3.addEventListener('click', ()=>{
      button3.style.display = "none";
      button2.style.display = "block";
      mw.style.display = "block";
      row.style.display = "none";
    })
  })
});