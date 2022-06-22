var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

const ctx = document.getElementById('chart1');
const ctx2 = document.getElementById('chart2');
const ctx3 = document.getElementById('chart3');

const chart1 = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['label1', 'label2', 'label3', 'label4'],
    datasets: [{
      label: 'What stakeholder group(s) do you represent?',
      data: [67, 34, 16, 5],
      backgroundColor: ['rgba(129, 175, 220)'],
      borderColor: ['rgb(129, 175, 220)'],
      fill: true,
      borderWidth: 1,
    }]
  },
  options: {
    indexAxis: 'y',
  },
});

const chart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['label1', 'label2'],
    datasets: [{
      data: [65.3, 34.7],
      backgroundColor: ['rgba(129, 175, 220)', 'rgba(229, 66, 66)'],
      borderColor: ['rgb(129, 175, 220)', 'rgba(229, 66, 66)'],
      fill: true,
      borderWidth: 1,
    }]
  },
});

const chart3 = new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ['label1', 'label2', 'label3', 'label4', 'label5'],
    datasets: [{
      data: [54.6, 24.9, 12.6, 5.9, 1.9],
      backgroundColor: ['rgba(129, 175, 220)', 'rgba(229, 66, 66)', 'rgba(46, 48, 146)', 'rgba(239, 187, 56)','rgba(42, 44, 56)'],
      borderColor: ['rgb(129, 175, 220)', 'rgba(229, 66, 66)', 'rgba(46, 48, 146)', 'rgba(239, 187, 56)', 'rgba(42, 44, 56)'],
      fill: true,
      borderWidth: 1,
    }]
  },
});

