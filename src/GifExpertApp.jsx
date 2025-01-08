
// API KEY: 14vdqyTEdDr47AMOH0Ib4oboQQQwMMeG

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";     // Quitamos el add category porque ya reconoce el index.js qye cuelga de components donde tenemos todos los exports


export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['One Punch']);

    //console.log(first);

    const onAddCategory = (newCategory) =>{
        // categories.push(newCategory);

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories ])
    }

    return (
        <>
            {/* título */}

            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={(value)=>onAddCategory(value)}
            />

            { 
                categories.map( (category) => (
                        <GifGrid 
                            key={ category }
                            category ={ category }/>
                    ))
            }

        </>
    );

  

}