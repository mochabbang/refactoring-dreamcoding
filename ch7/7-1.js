class Organization {
  #data;
  #name;
  #country;

  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  get organizationRawData() {
    return this.#data;
  }

  //   set name(name) {
  //     this.#name = name;
  //   }

  //   set country(country) {
  //     this.#country = country;
  //   }
}

const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});
//organization.name = "Dream Coding";
console.log(organization.name);
console.log(organization.country);
