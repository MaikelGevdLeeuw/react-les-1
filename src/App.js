import React, {Fragment} from 'react';
import './styles/styles.css'
import Button from "./components/Button/Button";
import bag1 from '../src/assets/bag_1.png'
import bag2 from '../src/assets/bag_2.png'
import bag3 from '../src/assets/bag_3.png'
import bag4 from '../src/assets/bag_4.png'
import brand from '../src/assets/brand.png'
import story from '../src/assets/our_story.png'
import Product from "./components/Product/Product";
import Tile from "./components/Tile/Tile";
import 'typeface-roboto';

function App() {
  return (
      <Fragment>
        <h1>Handbags & Purses</h1>
          <nav>
              <Button
                  children="to the collection"
                  buttonType="button"/>
              <Button
                  children="shop all bags"
                  buttonType="button"/>
              <Button
                  children="pre-orders"
                  buttonType="button"/>
          </nav>
          <main>
              <Product
                  label="Best seller"
                  price="400"
                  name="The hand bag"
                  image= {bag1}/>
              <Product
                  label="Best seller"
                  price="250"
                  name="The stylish bag"
                  image= {bag2}/>
              <Product
                  label="New Collection"
                  price="300"
                  name="The simple bag"
                  image= {bag3}/>
              <Product
                  label="New Collection"
                  price="150"
                  name="The trendy bag"
                  image= {bag4}/>
          </main>
          <footer>
              <div className="div">
                <section>
                    <Tile
                        title="THE BRAND"
                        paragraphs={[
                            "orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare, mi et tempus gravida, lacus magna venenatis purus, non fermentum dui nisi nec enim. Aenean elementum turpis sed nisl euismod vestibulum. Integer vel lacus et risus lacinia finibus.",
                        ]}
                    />
                </section>
                <section>
                    <Tile
                        image={brand}
                    />
                </section>
              </div>
              <div className="div">
                <section>
                    <Tile
                        image={story}
                    />
                </section>
                <section>
                    <Tile
                        title="OUR STORY"
                        paragraphs={[
                            "orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare, mi et tempus gravida, lacus magna venenatis purus, non fermentum dui nisi nec enim. Aenean elementum turpis sed nisl euismod vestibulum. Integer vel lacus et risus lacinia finibus.",
                            "orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare, mi et tempus gravida, lacus magna venenatis purus, non fermentum dui nisi nec enim. Aenean elementum turpis sed nisl euismod vestibulum. Integer vel lacus et risus lacinia finibus.",
                        ]}
                    />
                </section>
              </div>
          </footer>
      </Fragment>
  );
}

export default App;

