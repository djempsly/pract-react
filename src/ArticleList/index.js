import React from "react";

function ArticleList(props){
    const propsRenderFunction = props.render || props.children

    return (
        <section>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.total) && props.onCreateArticle()}
            {(!!props.total && !props.searchArt.length) && 
            props.onCreateArticleSearchResult(props.searchtext)}

            {/* {props.searchArt.map((todo)=>props.render(todo))} */}
            {props.searchArt.map(propsRenderFunction)}
             <ul>
                {propsRenderFunction}
            </ul>
        </section>
       
    )
}

export { ArticleList}