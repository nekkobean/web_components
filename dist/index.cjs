Object.defineProperty(exports,Symbol.toStringTag,{value:`Module`});var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},s=(n,r,a)=>(a=n==null?{}:e(i(n)),o(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));let c=require(`react/jsx-runtime`),l=require(`react`);l=s(l,1);var u=()=>(0,c.jsx)(`span`,{className:`animate-spin rounded-full h-4 w-4 border-b-2 border-white`}),d=({variant:e=`primary`,label:t,isLoading:n=!1,disabled:r=!1,onClick:i,style:a,type:o=`button`})=>{let s={primary:`bg-primary-button text-primary`,secondary:`bg-secondary-button text-primary`,restore:`bg-restore-button text-primary`,delete:`bg-delete-button text-primary`,disabled:`bg-disabled-button text-primary`},l=n?(0,c.jsx)(u,{}):null,d=r||n;return(0,c.jsx)(`div`,{className:`w-full md:w-auto`,children:(0,c.jsxs)(`button`,{type:o,className:`${s[e]} ${a||``} flex items-center gap-3 px-5 py-2.5 rounded-2xl text-lg md:text-lg lg:text-xl font-medium w-full md:w-auto md:max-w-full justify-center whitespace-nowrap
         ${d?`cursor-not-allowed opacity-50`:`hover:cursor-pointer`}`,disabled:d,onClick:i,children:[l,t]})})},f=({children:e,style:t})=>(0,c.jsx)(`div`,{className:`
        rounded-lg shadow-md overflow-hidden
        ${t||`w-full bg-primary`}
      `,children:e}),p=({title:e,description:t,titleClassName:n,descriptionClassName:r})=>(0,c.jsxs)(`div`,{className:`p-6`,children:[(0,c.jsx)(`h2`,{className:`font-bold mb-2 text-black whitespace-pre-line ${n||`text-lg`}`,children:e}),(0,c.jsx)(`p`,{className:`text-gray font-normal whitespace-pre-line ${r||`text-sm`}`,children:t})]}),m=({children:e})=>(0,c.jsx)(`div`,{className:`flex justify-end gap-4 w-full p-4`,children:e}),h=({alt:e,image:t,children:n})=>(0,c.jsxs)(`div`,{className:`relative w-full h-48`,children:[(0,c.jsx)(`img`,{src:t,alt:e,className:`w-full h-full object-cover`}),n]}),g=({children:e,className:t})=>(0,c.jsx)(`footer`,{className:`
        w-full
        text-white
        ${t||`bg-gray`}
      `,children:(0,c.jsx)(`div`,{className:`\r
          mx-auto\r
          max-w-7xl\r
          grid\r
          grid-cols-1\r
          gap-8\r
          px-6\r
          py-10\r
          md:grid-cols-3\r
        `,children:e})}),_=({copyright:e,footerBottomClassName:t=``})=>(0,c.jsx)(`div`,{className:`
        border-t
        
        py-4

        text-center
       
        ${t||`text-light-gray bg-gray border-gray text-sm`}
      `,children:e}),v=({email:e,phone:t,socials:n})=>(0,c.jsxs)(`div`,{className:`text-white`,children:[(0,c.jsx)(`h3`,{className:`\r
          mb-3\r
          text-lg\r
          font-semibold\r
        `,children:`Contact`}),(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsx)(`p`,{children:e}),(0,c.jsx)(`p`,{children:t})]}),(0,c.jsx)(`h4`,{className:`\r
          mt-5\r
          mb-2\r
          font-medium\r
        `,children:`Follow Us`}),(0,c.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:n.map(e=>(0,c.jsx)(`a`,{href:e.href,className:`hover:underline`,children:e.label},e.id))})]}),y=({children:e,description:t})=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[e,(0,c.jsx)(`p`,{className:`\r
          max-w-sm\r
          text-sm\r
          text-white\r
        `,children:t})]}),b=({title:e,links:t,onItemClick:n})=>(0,c.jsxs)(`div`,{className:`text-white`,children:[(0,c.jsx)(`h3`,{className:`\r
          mb-3\r
          text-lg\r
          font-semibold\r
        `,children:e}),(0,c.jsx)(`div`,{className:`flex flex-col gap-2`,children:t.map(e=>(0,c.jsx)(`a`,{href:e.href,onClick:()=>n?.(e.label),className:`hover:underline`,children:e.label},e.id))})]}),x=({children:e,onSubmit:t,className:n=``,...r})=>(0,c.jsx)(`form`,{onSubmit:t,className:`w-full max-w-sm ${n}`,...r,children:(0,c.jsx)(`div`,{className:`flex flex-col gap-1`,children:e})}),S=({children:e,style:t,contentClassName:n})=>(0,c.jsx)(`header`,{className:`w-full border-b border-light-gray shadow-sm ${t||`bg-white`}`,children:(0,c.jsx)(`div`,{className:n||`relative flex items-center justify-between gap-3 px-4 sm:px-9 py-3 sm:py-4 min-w-0`,children:e})}),C=({navDrawer:e=[],style:t,onItemClick:n})=>{let[r,i]=(0,l.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`button`,{onClick:()=>i(!0),className:`\r
          shrink-0\r
          flex\r
          md:hidden\r
          items-center\r
          justify-center\r
          h-10\r
          w-10\r
          rounded-md\r
          hover:bg-light-gray\r
        `,children:(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,className:`\r
            h-6\r
            w-6\r
            text-light-black\r
          `,children:(0,c.jsx)(`path`,{fillRule:`evenodd`,d:`M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z`,clipRule:`evenodd`})})}),r&&(0,c.jsx)(`div`,{onClick:()=>i(!1),className:`fixed inset-0 z-40 bg-black/40 md:hidden`}),(0,c.jsxs)(`aside`,{className:`
          fixed top-0
          left-0 z-50
          h-screen w-65
          bg-white
          shadow-lg
          transition-transform duration-300
          ${r?`translate-x-0`:`-translate-x-full`}
          md:hidden
          ${t||``}
        `,children:[(0,c.jsxs)(`div`,{className:`\r
            flex\r
            items-center\r
            justify-between\r
            border-b\r
            border-light-gray\r
            px-5\r
            py-4\r
          `,children:[(0,c.jsx)(`h2`,{className:`text-lg font-semibold text-light-black`,children:`Menu`}),(0,c.jsx)(`button`,{onClick:()=>i(!1),className:`\r
              flex\r
              items-center\r
              justify-center\r
              h-10\r
              w-10\r
              rounded-md\r
              hover:bg-light-gray\r
            `,children:(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,className:`\r
                h-6\r
                w-6\r
                text-light-black\r
              `,children:(0,c.jsx)(`path`,{fillRule:`evenodd`,d:`M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 01-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06Z`,clipRule:`evenodd`})})})]}),(0,c.jsx)(`div`,{className:`flex flex-col p-4`,children:e.map(e=>(0,c.jsx)(`a`,{href:e.href||`#`,onClick:()=>{n?.(e.label),i(!1)},className:`\r
                rounded-md\r
                px-4\r
                py-3\r
                hover:bg-light-gray\r
                text-black\r
              `,children:e.label},e.id))})]})]})},w=({logo:e=`/logo.svg`,title:t=`my Company`,style:n,alt:r=``,titleClassName:i=``})=>(0,c.jsxs)(`div`,{className:`
        flex
        items-center
        gap-2
        sm:gap-3
        shrink-0
        min-w-0
        max-w-28
        sm:max-w-40
        md:max-w-56
        ${n||``}
      `,children:[(0,c.jsx)(`img`,{src:e,alt:r,className:`\r
          h-8\r
          w-8\r
          sm:h-10\r
          sm:w-10\r
         object-cover\r
          rounded-full\r
          shrink-0\r
        `}),(0,c.jsx)(`h1`,{className:`
          text-sm
          sm:text-lg
          font-bold
          truncate
          ${i||`text-white`}
        `,title:t,children:t})]}),T=({navBar:e=[],style:t,onItemClick:n,navLabelClassName:r=`text-black`})=>(0,c.jsx)(`nav`,{className:`
        hidden
        md:flex
        flex-1
        gap-6
        lg:gap-12
        justify-center
        items-center
       
        absolute
        left-1/2
        -translate-x-1/2
        
        min-w-0
        overflow-x-auto
        whitespace-nowrap
        ${t||``}
      `,children:e.map(e=>(0,c.jsx)(`a`,{href:e.href||`#`,onClick:()=>n?.(e.label),className:`
            text-base
            lg:text-lg
            cursor-pointer
            font-bold
            
            ${r||`text-black hover:text-green`}`,children:e.label},e.id))}),E=({isOpen:e,onClose:t,title:n,children:r,style:i,bodyClassName:a})=>e?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`div`,{className:`fixed inset-0 z-40 bg-black/40`,onClick:t}),(0,c.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4`,children:(0,c.jsxs)(`div`,{className:`flex flex-col w-full max-w-md max-h-[85vh] rounded-lg bg-white shadow-lg ${i||``}`,role:`dialog`,"aria-modal":`true`,children:[(0,c.jsxs)(`div`,{className:`flex shrink-0 items-center justify-between border-b border-gray-200 px-5 py-4`,children:[(0,c.jsx)(`h2`,{className:`text-lg font-semibold`,children:n}),(0,c.jsx)(`button`,{onClick:t,className:`flex h-10 w-10 items-center justify-center hover:bg-gray-100 rounded-md`,"aria-label":`Close modal`,children:(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,className:`h-5 w-5`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 18L18 6M6 6l12 12`})})})]}),(0,c.jsx)(`div`,{className:`overflow-y-auto p-5 ${a||``}`,children:r})]})})]}):null,D=({placeholder:e=`Search...`,style:t,children:n})=>{let[r,i]=(0,l.useState)(!1);return(0,c.jsxs)(`div`,{className:`relative shrink-0 ${t||``}`,children:[(0,c.jsxs)(`div`,{className:`hidden md:block relative`,children:[(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,className:`\r
            absolute\r
            left-3\r
            top-1/2\r
            h-4\r
            w-4\r
            -translate-y-1/2\r
            text-light-gray\r
          `,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z`})}),(0,c.jsx)(`input`,{type:`text`,placeholder:e,className:`\r
            w-27.5\r
            sm:w-40\r
            md:w-50\r
            lg:w-60\r
            rounded-md\r
            border\r
            border-light-gray\r
            bg-white\r
            px-3\r
            py-2\r
            pl-9\r
            text-xs\r
            sm:text-sm\r
            text-gray\r
            focus:outline-none\r
            focus:ring-2\r
            focus:ring-blue\r
          `})]}),(0,c.jsx)(`button`,{onClick:()=>i(!0),className:`\r
          shrink-0\r
          flex\r
          md:hidden\r
          items-center\r
          justify-center\r
          h-10\r
          w-10\r
          rounded-md\r
          hover:bg-light-gray\r
        `,children:(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,className:`\r
            h-6\r
            w-6\r
            text-gray\r
          `,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z`})})}),(0,c.jsx)(E,{isOpen:r,title:`Search`,onClose:()=>i(!1),children:n||(0,c.jsxs)(`div`,{className:`relative`,children:[(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,className:`\r
                absolute\r
                left-3\r
                top-1/2\r
                h-4\r
                w-4\r
                -translate-y-1/2\r
                text-gray\r
              `,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z`})}),(0,c.jsx)(`input`,{autoFocus:!0,type:`text`,placeholder:e,className:`\r
                w-full\r
                rounded-md\r
                border\r
                border-light-gray\r
                bg-white\r
                px-3\r
                py-2\r
                pl-9\r
                text-sm\r
                text-gray\r
                focus:outline-none\r
                focus:ring-2\r
                focus:ring-blue\r
              `})]})})]})},O=({id:e,label:t,required:n,disabled:r,defaultChecked:i,error:a,helperText:o,onChange:s})=>{let[u,d]=(0,l.useState)(i||!1);return(0,c.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,c.jsxs)(`div`,{className:`flex items-start gap-2`,children:[(0,c.jsx)(`input`,{id:e,type:`checkbox`,checked:u,onChange:e=>{let t=e.target.checked;d(t),s?.(t)},disabled:r,className:`w-5 h-5 mt-1 shrink-0 border rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft ${r?`border-light cursor-not-allowed`:`border-default-medium hover:cursor-pointer`}`}),(0,c.jsxs)(`label`,{htmlFor:e,className:`select-none text-lg md:text-lg lg:text-xl font-medium ${r?`text-light-gray`:`text-heading`}`,children:[t,` `,n&&(0,c.jsx)(`span`,{className:`text-red`,children:`*`})]})]}),o&&(0,c.jsx)(`div`,{className:`text-sm md:text-base font-medium ${a?`text-red`:`text-gray`}`,children:o})]})},k=({label:e,options:t,required:n,disabled:r,helperText:i,error:a,value:o,onChange:s})=>(0,c.jsxs)(`div`,{className:`w-full flex flex-col gap-1`,children:[(0,c.jsxs)(`label`,{className:`text-lg md:text-lg lg:text-xl font-medium text-gray`,children:[e,` `,n&&`*`]}),(0,c.jsx)(`select`,{className:`h-12 px-4 w-full bg-neutral-secondary-medium border border-default-medium text-heading text-lg md:text-lg lg:text-xl rounded-base shadow-xs focus:ring-brand focus:border-brand ${r?`cursor-not-allowed`:`hover:cursor-pointer`}`,disabled:r,value:o,onChange:e=>s?.(e.target.value),children:t.map(e=>(0,c.jsx)(`option`,{value:e.name,children:e.value},e.key))}),i&&a&&(0,c.jsx)(`div`,{className:`text-red text-sm md:text-base font-normal`,children:i})]}),A=`border-red`,j=`text-red`,M=`border-gray`,N=({id:e,labelText:t,placeholder:n,type:r,error:i,helperText:a,name:o,value:s,onChange:l})=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,c.jsx)(`label`,{htmlFor:e,className:`text-lg md:text-lg lg:text-xl font-medium text-gray`,children:t}),(0,c.jsx)(`input`,{id:e,name:o??e,placeholder:n,type:r,value:s,onChange:l,className:`block w-full px-3 py-3 bg-neutral-secondary-medium border ${i?A:M} text-heading text-lg md:text-lg lg:text-xl rounded-base shadow-xs placeholder:text-body focus:ring-brand focus:border-brand`}),a&&(0,c.jsx)(`p`,{className:`${i?j:`text-light-gray`} text-sm md:text-base`,children:a})]}),P=({id:e,title:t,children:n,style:r=``,sectionTitleClassName:i,fullHeight:a=!1})=>(0,c.jsx)(`section`,{id:e,className:`
        w-full
        px-4
        py-6
        scroll-mt-[80px]
        sm:px-6
        sm:py-8
        md:px-10
        md:py-10
        lg:px-16
        lg:py-12
        ${a?`md:min-h-screen`:``}
        ${r||``}
      `,children:(0,c.jsxs)(`div`,{className:`mx-auto flex w-full max-w-7xl flex-col gap-6 sm:gap-8 md:gap-10`,children:[t&&(0,c.jsx)(`h2`,{className:`font-bold ${i||`text-black text-2xl sm:text-3xl md:text-4xl`}`,children:t}),n]})}),F=({items:e,breadcrumbTextClassName:t})=>(0,c.jsx)(`nav`,{"aria-label":`Breadcrumb`,children:(0,c.jsx)(`ol`,{className:`
          flex
          flex-wrap
          items-center
          gap-2
          text-sm
          ${t||`text-light-black`}
        `,children:e.map((t,n)=>{let r=n===e.length-1;return(0,c.jsxs)(`li`,{className:`\r
                flex\r
                items-center\r
                gap-2\r
              `,children:[r?(0,c.jsx)(`span`,{className:`\r
                    font-semibold\r
                    text-gray-900\r
                  `,children:t.label}):(0,c.jsx)(`a`,{href:t.href,className:`\r
                    text-light-black\r
                    transition-colors\r
                    hover:text-blue-600\r
                    hover:underline\r
                  `,children:t.label}),!r&&(0,c.jsx)(`span`,{className:`text-light-black`,children:`>`})]},t.id)})})}),I=({children:e,navItems:t,logo:n,companyTitle:r,description:i=``,email:a=``,phone:o=``,socials:s=[],copyright:u=``,headerClassName:d=`bg-white`,companyTitleClassName:f=``,breadcrumbClassName:p=`bg-light-gray`,footerClassName:m=``,footerBottomClassName:h=``,breadcrumbTextClassName:x=``,navLabelClassName:E=``})=>{let[O,k]=l.default.useState(t[0]?.label||`Home`);return(0,c.jsxs)(`div`,{className:`w-full scroll-smooth`,children:[(0,c.jsx)(`div`,{className:`sticky top-0 z-50`,children:(0,c.jsxs)(S,{style:d,children:[(0,c.jsxs)(`div`,{className:`flex items-center gap-4 lg:gap-10`,children:[(0,c.jsx)(w,{logo:n||``,title:r||`Company Name`,titleClassName:f}),(0,c.jsx)(T,{navBar:t,onItemClick:k,navLabelClassName:E})]}),(0,c.jsxs)(`div`,{className:`flex shrink-0 items-center gap-2 sm:gap-3`,children:[(0,c.jsx)(D,{}),(0,c.jsx)(C,{navDrawer:t,onItemClick:k})]})]})}),(0,c.jsx)(`div`,{className:`mx-auto max-w-full px-6 py-4 sticky z-40 top-16 ${p||`bg-light-gray`}`,children:(0,c.jsx)(F,{items:[{id:1,label:O,href:`#`}],breadcrumbTextClassName:x})}),e,(0,c.jsxs)(g,{className:m,children:[(0,c.jsx)(y,{description:i,children:(0,c.jsx)(`div`,{className:`scale-150 origin-left`,children:(0,c.jsx)(w,{logo:n||``,title:r||`Company Name`,titleClassName:f})})}),(0,c.jsx)(b,{title:`Quick Links`,links:t,onItemClick:k}),(0,c.jsx)(v,{email:a,phone:o,socials:s}),(0,c.jsx)(_,{copyright:u||` `,footerBottomClassName:h})]})]})},L=({children:e,style:t,maxRows:n=5})=>(0,c.jsx)(`div`,{className:`
        w-full
        overflow-hidden
        rounded-md
        bg-white
       shadow-lg
        ${t||``}
      `,children:(0,c.jsx)(`div`,{className:`overflow-auto`,style:{maxHeight:`${n*56}px`},children:(0,c.jsx)(`table`,{className:`w-full border-separate border-spacing-0`,children:e})})}),R=({children:e,style:t})=>(0,c.jsx)(`tbody`,{className:t,children:e}),z=({children:e,align:t=`left`,style:n})=>(0,c.jsx)(`td`,{className:`
        px-4 
        py-3
        text-sm
        ${t===`center`?`text-center`:``}
        ${t===`right`?`text-right`:``}
        ${t===`left`?`text-left`:``}
        ${n||``}
      `,children:e}),B={left:`text-left`,center:`text-center`,right:`text-right`},V=({rowData:e})=>(0,c.jsx)(`thead`,{children:(0,c.jsx)(`tr`,{className:`\r
          sticky\r
          top-0\r
          z-10\r
          bg-white\r
        `,children:e.map(e=>(0,c.jsx)(`th`,{className:`
              px-3 sm:px-4 md:px-6
              py-2 md:py-4
              text-xs sm:text-sm
              text-gray
              font-semibold

              border-b
              border-light-gray
              ${B[e.align||`left`]}
              ${e.style||``}
            `,children:e.value},e.key))})}),H=({rowData:e,style:t})=>(0,c.jsx)(`tr`,{className:`

        transition-colors
        hover:bg-gray-50
          [&:last-child_td]:border-b-0

       
        ${t||``}
      `,children:e.map(e=>(0,c.jsx)(`td`,{className:`
            px-3 sm:px-4 md:px-6
            py-2 md:py-4
            text-xs sm:text-sm
            text-gray
            whitespace-nowrap

            border-b
            border-light-gray
          
        
            
            ${B[e.align||`left`]}
            ${e.style||``}
          `,children:e.value},e.key))});exports.Breadcrumbs=F,exports.Button=d,exports.Card=f,exports.CardContent=p,exports.CardFooter=m,exports.CardImage=h,exports.Cfooter=g,exports.Cform=x,exports.Cheader=S,exports.CheckBox=O,exports.Ctable=L,exports.Drawer=C,exports.FooterBottom=_,exports.FooterContact=v,exports.FooterIcon=y,exports.Icon=w,exports.LandingLayout=I,exports.Loader=u,exports.Modal=E,exports.NavBar=T,exports.QuickLink=b,exports.SearchBar=D,exports.Section=P,exports.Select=k,exports.TableBody=R,exports.TableCell=z,exports.TableHead=V,exports.TableRow=H,exports.TextField=N;