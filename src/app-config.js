let gtagId = null

if (process.env.VUE_APP_GTAG_ID !== undefined) {
  gtagId = process.env.VUE_APP_GTAG_ID
}

export default {
  gtagId: gtagId
}
