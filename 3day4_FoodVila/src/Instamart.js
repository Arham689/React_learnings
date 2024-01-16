import React, { useState } from 'react'
import Section from './Section'

const Instamart = () =>{
    const [visibleSection  , setVisibleSection] = useState("about")
    return (
    <>
        <h1>This is instamart parent component completely for testing   </h1>
        <Section 
        title={"About"} 
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit pellentesque nisi, id tincidunt ligula mollis non. In ultricies nisl et rutrum venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas id ipsum pharetra lectus gravida cursus nec vitae nibh. Mauris suscipit ornare odio. In dapibus sem lorem, vitae accumsan turpis tempor non. Etiam feugiat, dolor at tempor mollis, mi lorem imperdiet risus, sed efficitur ipsum enim ut odio. Suspendisse quis diam libero. Curabitur vel nisl et nunc facilisis gravida vitae non libero. Curabitur vitae pharetra velit. In sapien orci, dictum id mi varius, pretium ultricies massa. Suspendisse potenti. Integer massa nunc, ornare ac lacinia eu, egestas a mauris. Maecenas egestas mauris id rhoncus egestas. In egestas vel dolor ac iaculis. Duis tincidunt dolor nec sem efficitur interdum."}
        // due to this condition our code is working 
        isVisible={visibleSection === 'about'}
        setIsVisible={(status)=>setVisibleSection(status ?'about' : false )}
        />

        <Section 
        title={"contact"} 
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit pellentesque nisi, id tincidunt ligula mollis non. In ultricies nisl et rutrum venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas id ipsum pharetra lectus gravida cursus nec vitae nibh. Mauris suscipit ornare odio. In dapibus sem lorem, vitae accumsan turpis tempor non. Etiam feugiat, dolor at tempor mollis, mi lorem imperdiet risus, sed efficitur ipsum enim ut odio. Suspendisse quis diam libero. Curabitur vel nisl et nunc facilisis gravida vitae non libero. Curabitur vitae pharetra velit. In sapien orci, dictum id mi varius, pretium ultricies massa. Suspendisse potenti. Integer massa nunc, ornare ac lacinia eu, egestas a mauris. Maecenas egestas mauris id rhoncus egestas. In egestas vel dolor ac iaculis. Duis tincidunt dolor nec sem efficitur interdum."}
        // due to this condition our code is working 
        isVisible={visibleSection === 'contact'}
        setIsVisible={(status)=>setVisibleSection(status ?'contact' : false )}
        />

        <Section 
        title={"profile"} 
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit pellentesque nisi, id tincidunt ligula mollis non. In ultricies nisl et rutrum venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas id ipsum pharetra lectus gravida cursus nec vitae nibh. Mauris suscipit ornare odio. In dapibus sem lorem, vitae accumsan turpis tempor non. Etiam feugiat, dolor at tempor mollis, mi lorem imperdiet risus, sed efficitur ipsum enim ut odio. Suspendisse quis diam libero. Curabitur vel nisl et nunc facilisis gravida vitae non libero. Curabitur vitae pharetra velit. In sapien orci, dictum id mi varius, pretium ultricies massa. Suspendisse potenti. Integer massa nunc, ornare ac lacinia eu, egestas a mauris. Maecenas egestas mauris id rhoncus egestas. In egestas vel dolor ac iaculis. Duis tincidunt dolor nec sem efficitur interdum."}
        // due to this condition our code is working 
        isVisible = {visibleSection === 'profile'}
        setIsVisible={(status)=>setVisibleSection(status ?'profile' : false )}
        />

    </>
    )
}

export default Instamart