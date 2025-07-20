const evilproxy = obj => new Proxy(
    (k,v) => (k === undefined || k === null) ? obj
           : (v === undefined)               ? obj[k]
           : obj[k] = v,
    { get: (_,p  ) =>   obj[p],
      set: (_,p,v) => ( obj[p] = v, true )
    });
