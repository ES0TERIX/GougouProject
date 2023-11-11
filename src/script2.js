function changeContainer(contentNumber) {
  const actuContainer = document.getElementsByClassName("actu-container");
  if (actuContainer) {
    console.log(actuContainer);
    console.log(typeof actuContainer);
    actuContainer.innerHTML = "";
    if (contentNumber === 1) {
      const content1 = document.createElement("div");
      content1.innerHTML = `
      <h2>ACTUALITÉS</h2>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          voluptatem ad magnam ullam ut repudiandae eaque delectus
          consequuntur reiciendis debitis, commodi odio cumque totam nesciunt
          adipisci facere impedit consequatur doloremque, id facilis quis ab
          ratione quidem accusantium. Sapiente ad sequi dicta nisi cumque enim
          ipsam voluptatibus incidunt, tempore asperiores error eligendi nihil
          ullam minus, ex blanditiis eum quaerat vitae numquam odio ratione
          repudiandae itaque. Ex quis magni dolorum est? Nulla officia
          voluptate hic quisquam quod commodi? Odit, corporis. Praesentium
          provident deserunt ut officia illo doloremque soluta consequuntur
          nam laudantium! Incidunt ducimus fugiat itaque quas repellat
          dignissimos nam iste voluptas porro obcaecati temporibus quam eaque
          dolore quisquam animi voluptate, consectetur amet sunt. Voluptatem
          sunt similique, nemo omnis eius odio est voluptatibus eos, optio
          labore placeat. Earum voluptatem natus libero nesciunt iusto eveniet
          tempora minima quae sunt laborum, dolorem facilis perspiciatis,
          numquam quidem ex ipsum nemo ipsa, vel quas distinctio incidunt aut
          odio in. Ipsam corporis molestiae officiis sapiente? Odit quo
          excepturi tempore aperiam totam adipisci eaque! Culpa ex dolores
          quod illo minus blanditiis laudantium doloremque earum nostrum fugit
          quia error eveniet totam, commodi debitis minima dolorem deleniti
          officia molestias, labore consequuntur ad? Inventore laboriosam
          quisquam harum placeat illum commodi excepturi minima fuga similique
          animi facilis praesentium, aliquam obcaecati optio vitae, sequi
          nostrum consequuntur distinctio quasi debitis magnam! Id, at
          assumenda est dolores quam quibusdam excepturi. Ratione
          exercitationem velit repellat quasi ea eveniet, officia laboriosam
      </p>
    `;
      actuContainer.appendChild(content1);
    } else {
      var content2 = document.createElement("div");
      content2.innerHTML = `
      <h2>SUPER FONCTIONNEMENT</h2>
      <div>TestdeFonctionnement</div>
    `;
      actuContainer.appendChild(content2);
    }
  } else {
    console.log(error);
  }
}
