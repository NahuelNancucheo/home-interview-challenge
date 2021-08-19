class ConfigurationService {
  constructor(model) {
    this.model = model; //configuration page model
  }

  //id = path name
  getById(id) {
    console.log('este el el modelo:', this.model,);
    const configuration = this.model;
    return configuration[id];
  }
}

module.exports = ConfigurationService;
