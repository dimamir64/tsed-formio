import{g as M}from"./_commonjsHelpers-042e6b4d.js";import{_ as F,b as H,d as J,e as N,f as Q,g as U,h as X,a as Y,i as Z}from"./_equalByTag-55b78a6e.js";var L=F,b=1,C=Object.prototype,W=C.hasOwnProperty;function j(a,r,e,f,l,n){var u=e&b,p=L(a),i=p.length,v=L(r),A=v.length;if(i!=A&&!u)return!1;for(var g=i;g--;){var s=p[g];if(!(u?s in r:W.call(r,s)))return!1}var O=n.get(a),y=n.get(r);if(O&&y)return O==r&&y==a;var _=!0;n.set(a,r),n.set(r,a);for(var T=u;++g<i;){s=p[g];var q=a[s],E=r[s];if(f)var d=u?f(E,q,s,r,a,n):f(q,E,s,a,r,n);if(!(d===void 0?q===E||l(q,E,e,f,n):d)){_=!1;break}T||(T=s=="constructor")}if(_&&!T){var P=a.constructor,t=r.constructor;P!=t&&"constructor"in a&&"constructor"in r&&!(typeof P=="function"&&P instanceof P&&typeof t=="function"&&t instanceof t)&&(_=!1)}return n.delete(a),n.delete(r),_}var m=j,I=H,c=J,z=N,V=m,$=Q,S=Y,x=U,o=X,h=1,B="[object Arguments]",D="[object Array]",w="[object Object]",k=Object.prototype,R=k.hasOwnProperty;function rr(a,r,e,f,l,n){var u=S(a),p=S(r),i=u?D:$(a),v=p?D:$(r);i=i==B?w:i,v=v==B?w:v;var A=i==w,g=v==w,s=i==v;if(s&&x(a)){if(!x(r))return!1;u=!0,A=!1}if(s&&!A)return n||(n=new I),u||o(a)?c(a,r,e,f,l,n):z(a,r,i,e,f,l,n);if(!(e&h)){var O=A&&R.call(a,"__wrapped__"),y=g&&R.call(r,"__wrapped__");if(O||y){var _=O?a.value():a,T=y?r.value():r;return n||(n=new I),l(_,T,e,f,n)}}return s?(n||(n=new I),V(a,r,e,f,l,n)):!1}var ar=rr,nr=ar,G=Z;function K(a,r,e,f,l){return a===r?!0:a==null||r==null||!G(a)&&!G(r)?a!==a&&r!==r:nr(a,r,e,f,K,l)}var sr=K,fr=sr;function er(a,r){return fr(a,r)}var ir=er;const vr=M(ir);export{vr as i};
//# sourceMappingURL=isEqual-8151492b.js.map
