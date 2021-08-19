class ConfigurationController {
  constructor(configurationService) {
    this.configurationService = configurationService;
  }

  /*
  returns:
    200 if configuration exists
    404 if configuration doesn't exists
  */
  get(req, res) {
    console.log('esto es el path del params:', req.params);
    console.log('esto es configuration:', this.configurationService )
    const data = this.configurationService.getById(req.params.path)
    console.log('acaaaaaaaaaa:', data);
    return res.status(200).json({data})
    /*
    if(data) {
      return  res.status(200).json({ data })
    } else {
      return res.status(404).json({ data: false })
    }
    */
    
  }
}

module.exports = ConfigurationController;
