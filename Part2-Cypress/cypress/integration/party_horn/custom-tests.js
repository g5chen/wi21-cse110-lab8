describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it("changing the value of the volume input box, and then testing to see if the slider has changed to the proper value", () => {
    cy.get("#volume-number").clear().type("75");
    cy.get("#volume-slider").then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it("if the reverse is true", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#volume-number").then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it("if the volume of the <audio> element changes when we change the value of our slider", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("audio").then(($el) => {
      expect($el).to.have.prop("volume", 0.33);
    });
  });

  it("Test if the image and sound sources change when you select the party horn radio button", () => {
    cy.get("#radio-party-horn").check().trigger("input");
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/audio/party-horn.mp3");
    });
    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/images/party-horn.svg");
    });
  });

  it("Volume image changes when increasing volumes: volume = 0 case", () => {
    cy.get("#volume-number").clear().type(0);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-0.svg"
      );
    });
  });

  it("Volume image changes when increasing volumes: 1 <= volume <= 33", () => {
    for(var vol = 1; vol <= 33; ++vol){
      cy.get("#volume-number").clear().type(vol);
      cy.get("#volume-image").then(($el) => {
        expect($el).to.have.attr(
          "src",
         "./assets/media/icons/volume-level-1.svg"
        );
      });
    }
  });

  it("Volume image changes when increasing volumes: 34 <= volume <= 66", () => {
    for(var vol = 34; vol <= 66; ++vol){
      cy.get("#volume-number").clear().type(vol);
      cy.get("#volume-image").then(($el) => {
        expect($el).to.have.attr(
          "src",
         "./assets/media/icons/volume-level-2.svg"
        );
      });
    }
  });

  it("Test if the volume image changes when increasing volumes: 67 <= volume <= 100", () => {
    for(var vol = 67; vol <= 100; ++vol){
      cy.get("#volume-number").clear().type(vol);
      cy.get("#volume-image").then(($el) => {
        expect($el).to.have.attr(
          "src",
         "./assets/media/icons/volume-level-3.svg"
        );
      });
    }
  });

  it("Test if the honk button is disabled when the textbox input is a empty or a non-number", () => {
    cy.get("#volume-number").clear();
     cy.get("#honk-btn").then(($el) => {
       expect($el).to.have.attr("Disabled");
     });
  });

  it("Test if the honk button is disabled when the textbox input is a empty or a non-number", () => {
    cy.get("#volume-number").clear().type("notanumber");
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.have.attr("Disabled");
    });
  });

  it("Test if an error is shown when you type a number outside of the given range for the volume textbox input: nagetive number", () => {
    cy.get("#volume-number").clear().type("-5");
    cy.get(":invalid").then(($el) => {
      expect($el).to.exist;
   });
  });

  it("Test if an error is shown when you type a number outside of the given range for the volume textbox input: bigger than 100", () => {
    cy.get("#volume-number").clear().type("111");
    cy.get(":invalid").then(($el) => {
      expect($el).to.exist;
   });
  });

  it("Test if an error is shown when you type a number outside of the given range for the volume textbox input: float", () => {
    cy.get("#volume-number").clear().type("0.1");
    cy.get(":invalid").then(($el) => {
      expect($el).to.exist;
   });
  });

});
